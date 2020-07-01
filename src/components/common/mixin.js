import { debounce } from './utils'
import backtop from "components/content/backtop/backtop";


export const itmeLisentMixin = {
  data() {
    return {
      itemShouyimagelode: null
    }
  },
  mounted() {
    //1. 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    // ItemImageLoade  监听图片加载完成

    this.itemShouyimagelode = () => {
      //调用过于频繁！需要对其进行防抖动处理
      refresh();
    };
    this.$bus.$on("ItemImageLoade", this.itemShouyimagelode);
    console.log('我是混入中的事件');

  }
}

//封装回到顶部
export const backtopMixin = {
  data() {
    return {
      isvisible: false,
    }
  },
  components: {
    backtop
  },
  methods:{
    backclick() {
      this.$refs.scroll.scrollTo(0, 0,300);
      //
    },
  }
}

