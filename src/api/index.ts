import request from "../http";


export const queryAssetInfo = (data:any) => {
    return request.post('/asset/query',data)
}
