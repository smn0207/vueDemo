import {request} from './request'

export function homerequest(){
    return request({
        url:'/home/multidata'
    })
}

export function homeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
