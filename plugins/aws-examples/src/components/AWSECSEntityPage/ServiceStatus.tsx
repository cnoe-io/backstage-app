import React from "react";
import {
  StatusRunning,
  StatusOK,
  StatusAborted,
  StatusError,
} from "@backstage/core-components";

export const ServiceStatus = ({ status }: { status: string | undefined }) => {
  switch (status) {
    case "ACTIVE":
      return (
        <>
          <StatusOK /> Active
        </>
      );
    case "INACTIVE":
      return (
        <>
          <StatusError /> Inactive
        </>
      );
    case "DRAINING":
      return (
        <>
          <StatusRunning /> Inactive
        </>
      );
    default:
      return (
        <>
          <StatusAborted /> Unknown
        </>
      );
  }
};