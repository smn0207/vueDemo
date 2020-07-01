export default {
  //修改数量
  AddCounter(state, paylode) {
    paylode.count++;
  },
  //加入新的商品信息
  addCart(state, paylode) {
    paylode.checked=true
    state.CartList.push(paylode)
  }
}