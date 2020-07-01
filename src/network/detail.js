import { request } from './request'

export function GetDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export function GetRecommond(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo, colums, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.colums = colums
    this.services = services
    this.realPrice = itemInfo.lowNowPrice;
    // this.realPrice = itemInfo.lowNowPrice;
  }
}

export class shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.size=rule.tables
  }
}