const devBaseURL = "https://nicemusic-api.lxhcool.cn";
const proBaseURL = "https://nicemusic-api.lxhcool.cn";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
