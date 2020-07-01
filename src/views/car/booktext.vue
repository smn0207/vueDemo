<template>
  <div>
    购物车
    <h1>书籍购物车</h1>
    <div v-if="books.length">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in books" :key="item.id">
            <td class="books">{{item.id}}</td>
            <td class="books">{{item.book}}</td>
            <td class="books">{{item.date}}</td>
            <td class="books">{{item.price | changeprice }}</td>
            <td class="books">
              <button @click="increasenum(item)" :disabled="item.num<=1">-</button>
              {{item.num}}
              <button @click="creasenum(item)">+</button>
            </td>
            <td class="books">
              <button @click="yichuitem(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>总计：{{countSum}}</h1>
    </div>
    <p v-else>购物车位空</p>
  </div>
</template>

<script>
export default {
  // name: "gouwuche",
  data() {
    return {
      books: [
        { id: 1, book: "书名1", date: "2020-9", price: 44, num: 1 },
        { id: 2, book: "书名2", date: "2020-7", price: 55, num: 1 },
        { id: 3, book: "书名3", date: "2020-4", price: 7, num: 1 },
        { id: 4, book: "书名4", date: "2020-5", price: 32, num: 1 }
      ]
      // sum: 0, //需要获取多个数组中的价格,
    };
  },
  computed: {
    countSum() {
      let sumprice = 0;
      for (let i = 0; i < this.books.length; i++) {
        sumprice += this.books[i].price * this.books[i].num;
      }
      return sumprice;
      //  sum = books
      // this.books.array.forEach(item => {
      //   return (sum += item.price * item.num);
      // });
      //  return   this.books.forEach((item,index) => {
      //         sun['index']==index;
      //         var a =item.price*item.num
      //       this.sum = item.price*item.num
      //     });
      // return this.sum=item.price*
    }
  },
  methods: {
    creasenum(item) {
      //  item.num++
      item.num++;
    },
    increasenum(item) {
      // if (item.num >= 1) {
      //   item.num--;
      //   // console.log(1);
      // }
      item.num--;
    },
    yichuitem(index) {
      this.books.splice(index, 1);
    }
    // changeprice(price){
    //      return '￥'+price.toFixed(2)
    // }
  },
  filters: {
    //过滤器
    changeprice(price) {
      return "￥" + price.toFixed(2);
    }
  }
};
</script>>

<style scoped>
.table_clumn {
  display: table-column;
}
tr {
  /* display: flex; */
  width: 100%;
  text-align: center;
}
th,
td {
  /* flex: 1; */
  width: 16%;
  border: 1px solid black;
}
</style>