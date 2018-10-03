import config from "../../config/config.json";

export const environment = {
  production: true,
  TRADE_API_BASE_PATH: config.TraDE_URL,
  HDT_API_BASE_PATH: config.HDT_URL
};
