import '@backstage/ui/css/styles.css';
import '@backstage/cli/asset-types';

import ReactDOM from 'react-dom/client';

import App from './App';

const style = document.createElement('style');
style.textContent = `
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  #root {
    height: 100%;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  main {
    max-width: 100%;
    overflow-x: hidden;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.25); }

  /* Selection & Focus */
  ::selection { background: rgba(0,86,140,0.2); color: inherit; }
  :focus-visible { outline: 2px solid #00568C; outline-offset: 2px; border-radius: 4px; }

  /* Base transitions */
  a { transition: color 0.15s ease; }
  button { transition: all 0.15s ease; }
  table { border-collapse: separate; border-spacing: 0; }

  /* ===== SIDEBAR POLISH ===== */
  nav[aria-label="sidebar nav"] a[class*="SidebarItem"] {
    border-radius: 8px !important;
    margin: 2px 8px !important;
    transition: all 0.2s ease !important;
  }
  nav[aria-label="sidebar nav"] a[class*="SidebarItem"]:hover {
    background: rgba(255,255,255,0.1) !important;
  }
  nav[aria-label="sidebar nav"] hr {
    opacity: 0.12;
    margin: 8px 16px;
  }

  /* ===== CARD HOVER EFFECTS ===== */
  [class*="MuiCard-root"],
  [class*="BackstageInfoCard"] {
    transition: box-shadow 0.25s ease, transform 0.25s ease !important;
  }
  [class*="MuiCard-root"]:hover,
  [class*="BackstageInfoCard"]:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06) !important;
    transform: translateY(-2px);
  }

  /* InfoCard header subtle gradient */
  [class*="BackstageInfoCard"] [class*="header"] {
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  /* ===== TABLE STYLING ===== */
  table thead th,
  [class*="MuiTableCell-head"] {
    font-weight: 700 !important;
    text-transform: uppercase;
    font-size: 11px !important;
    letter-spacing: 0.5px;
    opacity: 0.7;
  }
  table tbody tr,
  [class*="MuiTableRow-root"] {
    transition: background-color 0.15s ease;
  }
  table tbody tr:hover,
  [class*="MuiTableRow-root"]:hover {
    background-color: rgba(0,86,140,0.04) !important;
  }
  table tbody tr:nth-of-type(even),
  [class*="MuiTableRow-root"]:nth-of-type(even) {
    background-color: rgba(0,86,140,0.015);
  }

  /* ===== TAB BAR POLISH ===== */
  [role="tablist"] {
    border-bottom: 2px solid rgba(0,0,0,0.06);
  }
  [role="tab"] {
    font-weight: 500 !important;
    text-transform: none !important;
    letter-spacing: 0.3px;
    transition: color 0.2s ease, background-color 0.2s ease !important;
    border-radius: 8px 8px 0 0;
    min-height: 42px !important;
  }
  [role="tab"]:hover {
    background-color: rgba(0,86,140,0.04);
  }
  [role="tab"][aria-selected="true"] {
    font-weight: 600 !important;
    color: #FF9800 !important;
  }
  /* Orange tab indicator matching sidebar accent */
  [role="tablist"] [class*="MuiTabs-indicator"],
  [role="tablist"] .MuiTabs-indicator,
  [class*="PrivateTabIndicator"],
  [class*="MuiTabs-indicator"] {
    background-color: #FF9800 !important;
  }

  /* ===== BACKSTAGE HEADER — match API page headerCardStyle ===== */
  main > header {
    background: linear-gradient(135deg, #003D7A 0%, #00568C 50%, #1A8DFF 100%) !important;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"), linear-gradient(135deg, #003D7A 0%, #00568C 50%, #1A8DFF 100%) !important;
    background-size: cover, cover !important;
    background-position: center !important;
    border-radius: 16px !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06) !important;
    margin: 24px auto 24px auto !important;
    padding: 40px 24px 32px !important;
    text-align: center !important;
    overflow: hidden !important;
    min-height: 135px !important;
    max-height: 135px !important;
    display: block !important;
    width: calc(100% - 56px) !important;
  }
  /* Title + subtitle container */
  main > header > div:first-child {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
  }
  main > header h1,
  main > header h2,
  main > header h3,
  main > header h4,
  main > header span,
  main > header [class*="title"],
  main > header [class*="subtitle"] {
    text-align: center !important;
    width: 100% !important;
  }
  /* Hide the actions/kebab menu container */
  main > header > div:last-child:not(:first-child) {
    display: none !important;
  }

  /* ===== ENTITY PAGE CARD SHADOWS ===== */
  article [class*="MuiPaper-root"],
  [class*="BackstageContent"] [class*="MuiPaper-root"] {
    border-radius: 16px !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06) !important;
  }
  /* Don't apply to nested papers inside cards (dropdowns, popovers) */
  [class*="MuiPaper-root"] [class*="MuiPaper-root"] {
    border-radius: 4px !important;
    box-shadow: none !important;
  }

  /* ===== TABLE CARDS ===== */
  /* Wrap tables in shadow/rounded style — use descendant selectors to reach deeply nested papers */
  [class*="BackstageContent"] [class*="BackstageTable-root"] > [class*="MuiPaper-root"] {
    border-radius: 16px !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06) !important;
    overflow: hidden;
  }

  /* ===== ORANGE ACCENT BUTTONS ===== */
  [class*="BackstageContentHeader"] button,
  [class*="BackstageContentHeader"] a[class*="MuiButton"],
  button[class*="MuiButton-containedPrimary"],
  a[class*="MuiButton-containedPrimary"] {
    background: linear-gradient(180deg, #FFB74D 0%, #FF9800 100%) !important;
    background-image: linear-gradient(180deg, #FFB74D 0%, #FF9800 100%) !important;
    color: #fff !important;
    border: none !important;
  }
  button[class*="MuiButton-containedPrimary"]:hover,
  a[class*="MuiButton-containedPrimary"]:hover {
    background: linear-gradient(180deg, #FF9800 0%, #F57C00 100%) !important;
    background-image: linear-gradient(180deg, #FF9800 0%, #F57C00 100%) !important;
    box-shadow: 0 4px 12px rgba(255,152,0,0.3) !important;
  }

  /* Filter dropdown button accent */
  button[aria-label="Toggle filters"] {
    border-color: #FF9800 !important;
    color: #FF9800 !important;
  }

  /* ===== OUTLINED BUTTONS — match Filters button style (orange outline, pill shape, subtle gradient) ===== */
  button[class*="MuiButton-outlined"],
  a[class*="MuiButton-outlined"] {
    color: #FF9800 !important;
    border: 1px solid rgba(255,152,0,0.35) !important;
    border-radius: 20px !important;
    padding: 8px 16px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    text-transform: none !important;
    transition: all 0.2s ease !important;
    background: linear-gradient(180deg, rgba(255,152,0,0.04) 0%, rgba(255,152,0,0.01) 100%) !important;
    box-shadow: 0 1px 3px rgba(255,152,0,0.08), 0 1px 2px rgba(0,0,0,0.04) !important;
  }
  button[class*="MuiButton-outlined"]:hover,
  a[class*="MuiButton-outlined"]:hover {
    background: linear-gradient(180deg, rgba(255,152,0,0.12) 0%, rgba(255,152,0,0.06) 100%) !important;
    border-color: rgba(255,152,0,0.6) !important;
    box-shadow: 0 3px 8px rgba(255,152,0,0.15), 0 1px 3px rgba(0,0,0,0.06) !important;
    transform: translateY(-1px);
  }

  /* ===== OWNERSHIP / ENTITY TAGS — stand out with accent color ===== */
  [class*="MuiChip-root"] {
    transition: all 0.15s ease !important;
    font-weight: 500 !important;
    background: linear-gradient(135deg, rgba(0,86,140,0.08) 0%, rgba(26,141,255,0.06) 100%) !important;
    color: #00568C !important;
    border: 1px solid rgba(0,86,140,0.15) !important;
    box-shadow: 0 1px 3px rgba(0,86,140,0.08) !important;
  }
  [class*="MuiChip-root"]:hover {
    background: linear-gradient(135deg, rgba(0,86,140,0.14) 0%, rgba(26,141,255,0.10) 100%) !important;
    box-shadow: 0 2px 6px rgba(0,86,140,0.12) !important;
    transform: translateY(-1px);
  }
  /* Ownership links in template cards */
  [class*="MuiCardActions"] a,
  [class*="MuiCardActions"] span[class*="MuiTypography"] {
    color: #00568C !important;
    font-weight: 500 !important;
  }

  /* ===== CONTENT HEADER — transparent background ===== */
  [class*="BackstageContentHeader-container"] {
    background: transparent !important;
    border-radius: 16px !important;
    box-shadow: none !important;
    padding: 12px 16px !important;
    margin-bottom: 24px !important;
    display: flex;
    align-items: center;
  }

  /* ===== FILTER SIDEBARS ===== */
  /* Hide all filter sidebars — catalog uses empty filters, docs/create hidden via CSS */
  [class*="CatalogFilterLayout-filters"],
  article > [class*="MuiGrid-container"] > [class*="MuiGrid-grid-lg-2"] {
    display: none !important;
  }
  /* Make content area take full width */
  [class*="CatalogFilterLayout-content"],
  article > [class*="MuiGrid-container"] > [class*="MuiGrid-grid-lg-10"] {
    flex: 1 !important;
    max-width: 100% !important;
    flex-basis: 100% !important;
  }

  /* ===== DARK MODE OVERRIDES (detected via JS class on html) ===== */
  .backstage-dark ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); }
  .backstage-dark ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }
  .backstage-dark ::selection { background: rgba(77,166,255,0.25); }
  .backstage-dark :focus-visible { outline-color: #4DA6FF; }
  .backstage-dark [class*="MuiCard-root"]:hover,
  .backstage-dark [class*="BackstageInfoCard"]:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2) !important;
  }
  .backstage-dark [class*="BackstageInfoCard"] [class*="header"] {
    border-bottom-color: rgba(255,255,255,0.06);
  }
  .backstage-dark table tbody tr:hover,
  .backstage-dark [class*="MuiTableRow-root"]:hover {
    background-color: rgba(77,166,255,0.06) !important;
  }
  .backstage-dark table tbody tr:nth-of-type(even),
  .backstage-dark [class*="MuiTableRow-root"]:nth-of-type(even) {
    background-color: rgba(255,255,255,0.015);
  }
  .backstage-dark [role="tablist"] { border-bottom-color: rgba(255,255,255,0.06); }
  .backstage-dark [role="tab"]:hover { background-color: rgba(77,166,255,0.06); }
  .backstage-dark [role="tab"][aria-selected="true"] {
    color: #FFB74D !important;
  }
  .backstage-dark [role="tablist"] [class*="MuiTabs-indicator"],
  .backstage-dark [class*="PrivateTabIndicator"],
  .backstage-dark [class*="MuiTabs-indicator"] {
    background-color: #FFB74D !important;
  }
  /* Dark mode header — deeper blue with subtle wave */
  .backstage-dark main > header {
    background: linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #2E6BA6 100%) !important;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='rgba(255,255,255,0.08)' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"), linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #2E6BA6 100%) !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 1.5px 6px rgba(0,0,0,0.15) !important;
  }
  /* Orange accent buttons in dark mode */
  .backstage-dark button[class*="MuiButton-containedPrimary"],
  .backstage-dark a[class*="MuiButton-containedPrimary"] {
    background: linear-gradient(180deg, #FFB74D 0%, #FF9800 100%) !important;
    background-image: linear-gradient(180deg, #FFB74D 0%, #FF9800 100%) !important;
    color: #fff !important;
  }
  .backstage-dark button[class*="MuiButton-containedPrimary"]:hover,
  .backstage-dark a[class*="MuiButton-containedPrimary"]:hover {
    background: linear-gradient(180deg, #FF9800 0%, #F57C00 100%) !important;
    background-image: linear-gradient(180deg, #FF9800 0%, #F57C00 100%) !important;
  }
  /* Outlined buttons in dark mode */
  .backstage-dark button[class*="MuiButton-outlined"],
  .backstage-dark a[class*="MuiButton-outlined"] {
    color: #FFB74D !important;
    border-color: rgba(255,183,77,0.35) !important;
    background: linear-gradient(180deg, rgba(255,183,77,0.06) 0%, rgba(255,183,77,0.02) 100%) !important;
    box-shadow: 0 1px 3px rgba(255,183,77,0.1), 0 1px 2px rgba(0,0,0,0.1) !important;
  }
  .backstage-dark button[class*="MuiButton-outlined"]:hover,
  .backstage-dark a[class*="MuiButton-outlined"]:hover {
    background: linear-gradient(180deg, rgba(255,183,77,0.14) 0%, rgba(255,183,77,0.06) 100%) !important;
    border-color: rgba(255,183,77,0.6) !important;
    box-shadow: 0 3px 8px rgba(255,183,77,0.18), 0 1px 3px rgba(0,0,0,0.12) !important;
  }
  .backstage-dark button[aria-label="Toggle filters"] {
    color: #FFB74D !important;
    border-color: rgba(255,183,77,0.35) !important;
  }
  /* Chips/tags in dark mode */
  .backstage-dark [class*="MuiChip-root"] {
    background: linear-gradient(135deg, rgba(77,166,255,0.12) 0%, rgba(77,166,255,0.06) 100%) !important;
    color: #4DA6FF !important;
    border: 1px solid rgba(77,166,255,0.2) !important;
    box-shadow: 0 1px 3px rgba(77,166,255,0.1) !important;
  }
  .backstage-dark [class*="MuiChip-root"]:hover {
    background: linear-gradient(135deg, rgba(77,166,255,0.18) 0%, rgba(77,166,255,0.10) 100%) !important;
    box-shadow: 0 2px 6px rgba(77,166,255,0.15) !important;
  }
  /* Ownership links in dark mode */
  .backstage-dark [class*="MuiCardActions"] a,
  .backstage-dark [class*="MuiCardActions"] span[class*="MuiTypography"] {
    color: #4DA6FF !important;
  }
  /* Homepage dark mode overrides */
  .backstage-dark .cnoe-hero-header {
    background: linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #2E6BA6 100%) !important;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='rgba(255,255,255,0.08)' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"), linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #2E6BA6 100%) !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 1.5px 6px rgba(0,0,0,0.15) !important;
  }
  /* Homepage cards, search bar, and tool cards in dark mode */
  .backstage-dark .cnoe-toolbar-card,
  .backstage-dark .cnoe-table-card,
  .backstage-dark .cnoe-card {
    background: #1E1E1E !important;
    border-color: rgba(255,255,255,0.08) !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 1.5px 6px rgba(0,0,0,0.15) !important;
  }
  .backstage-dark .cnoe-card a[style*="rgba(25, 118, 210"] {
    background: rgba(77,166,255,0.06) !important;
    border-color: rgba(77,166,255,0.12) !important;
    color: #B0BEC5 !important;
  }
  /* Filter dropdown in dark mode */
  .backstage-dark div[style*="background-paper, #fff"] {
    background: #1E1E1E !important;
    border-color: rgba(255,255,255,0.08) !important;
  }

  /* Consistent page content padding */
  [class*="BackstageContent-root"] {
    padding: 0 0.3vw 24px !important;
  }
`;
document.head.appendChild(style);

// Detect Backstage dark mode and toggle a CSS class for dark overrides
const detectDarkMode = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.documentElement.classList.toggle('backstage-dark', theme.includes('dark'));
    return;
  }
  const bg = window.getComputedStyle(document.body).backgroundColor;
  const match = bg.match(/\d+/g);
  if (match) {
    const brightness = (parseInt(match[0], 10) + parseInt(match[1], 10) + parseInt(match[2], 10)) / 3;
    document.documentElement.classList.toggle('backstage-dark', brightness < 128);
  }
};
const observer = new MutationObserver(detectDarkMode);
observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener('storage', detectDarkMode);
setInterval(detectDarkMode, 500);
detectDarkMode();

async function startApp() {
  if (
    process.env.MOCK_MODE === 'true' ||
    new URLSearchParams(window.location.search).has('mock')
  ) {
    const { worker } = await import('./mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
    // eslint-disable-next-line no-console -- intentional startup log for MSW
    console.log('[MSW] Mock service worker started');
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
}

startApp();
