var base = "192.168.1.128:8000";

export const base_urls = {
  API_URL: process.env.API_URL || `http://${base}/api`,
  API_URL_BROWSER: process.env.API_URL_BROWSER || `http://${base}/api`,
  WS_URL: process.env.WS_URL || `${base}`
};
