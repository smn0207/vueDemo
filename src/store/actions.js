export default { //逻辑复杂和异步操作建议在这里
  addCart(context, paylode) {
      // for(let item of context.state.CartList){
      //   if(item.iid===paylode.iid){
      //     oldProduct=item //注意oldProduct指向cartlist
      //   }
      // } // let oldProduct = null;

    return new Promise((resovle, reject) => { //为确保商品添加购物车完成后再进行弹出框
      let oldProduct = context.state.CartList.find(item => item.iid === paylode.iid)
      if (oldProduct) {
        context.commit('AddCounter', oldProduct)
        console.log('当前的商品数量加一');
          resovle()
      } else {
        paylode.count = 1
        context.commit('addCart', paylode)
        console.log("添加了新的商品");
          resovle()
      }
    })

  }
}
