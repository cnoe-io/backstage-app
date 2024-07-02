import { errorHandler } from '@backstage/backend-common';
import { LoggerService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import express from 'express';
import Router from 'express-promise-router';
import {DefaultAwsCredentialsManager} from '@backstage/integration-aws-node';
import {S3Client, ListObjectsV2Command, GetObjectCommand} from "@aws-sdk/client-s3";
import * as fs from 'fs';

const {inflate} = require('pako'); 

type ListObjectsInput = {
  Bucket: string,
  Prefix: string,
  ContinuationToken?: string,
};

export interface RouterOptions {
  logger: LoggerService;
  config: Config,
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const {logger, config} = options;
  const awsCredentialsManager = DefaultAwsCredentialsManager.fromConfig(config);
  const credProvider = await awsCredentialsManager.getCredentialProvider({});
  const client = new S3Client({
    credentialDefaultProvider: () => credProvider.sdkCredentialProvider,
  });

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.post('/deflate', async (req, res) => {
    let jsonData:any = {};

    if(req.body.tfState) {
      const bytes = [];
      const inputString = atob(req.body.tfState);
      for (let i = 0; i < inputString.length; i++) {
          const abyte = inputString.charCodeAt(i) & 0xff;
          bytes.push(abyte);
      }
      const binData = new Uint8Array(bytes);
      const inflated = inflate(binData,{to:'string'});
      jsonData = JSON.parse(inflated);
    }

    res.json(jsonData);
  });

  router.post('/getFileList', async (req, res) => {
    let responseObject: any = [];
    let token: string | undefined = "1";
    while (token) {
      const input: ListObjectsInput = {
        Bucket: req.body.Bucket,
        Prefix: req.body.Key,
      }
      if (token != "1" && token) {
        input.ContinuationToken = token;
      }
      const command = new ListObjectsV2Command(input);
      const commandResponse = await client.send(command);
      responseObject = responseObject.concat(commandResponse.Contents);
      logger.debug(JSON.stringify(commandResponse));
      token = commandResponse.NextContinuationToken;
    }
    res.json(responseObject);
  });

  router.post('/getLocalFileList', async (req, res) => {
    const responseObject: any[] = [];

    try {
      const fsstat = fs.lstatSync(req.body.FileLocation);
      if (fsstat.isDirectory()) {
        const filenames = fs.readdirSync(req.body.FileLocation);
        for (const i in filenames) {
          responseObject.push({
            Key: `${req.body.FileLocation  }/${  filenames[i]}`
          });
        }
      } else if (fsstat.isFile()) {
        responseObject.push({
          Key: req.body.FileLocation
        });
      }
    } catch (e) {
      logger.error(String(e))
    }

    res.json(responseObject);
  });

  router.post('/getTFStateFile', async (req, res) => {
    if (req.body.Bucket) {
      const command = new GetObjectCommand({
        Bucket: req.body.Bucket,
        Key: req.body.Key,
      });
      const commandResponse = await client.send(command);
      const str: any = await commandResponse.Body?.transformToString();
      res.json(JSON.parse(str));

    } else {
      let jsonData: any = {};
      try {
        const data = fs.readFileSync(req.body.Key, {encoding: 'utf8', flag: 'r'});
        jsonData = JSON.parse(data);
      } catch (e) {
        logger.error(String(e));
      }

      res.json(jsonData);
    }
  });

  router.use(errorHandler());
  return router;
}
