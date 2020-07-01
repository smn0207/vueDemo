// 配置文件  与公共配置进行合并

module.exports={
   configureWebpack:{
       resolve:{
           alias:{   //配置别名  省略'./'或者'../'
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views',
           }
       }
   }
}