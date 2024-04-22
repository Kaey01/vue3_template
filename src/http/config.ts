import config from '../../public/static/config.json'

// 后端接口地址
export const BASE_URL = config.devHttpUrl;
// 请求头的基本信息
export const HEADER = {
    "Content-Type": "application/json;charset=UTF-8",
};
