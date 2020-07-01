<template>
    <div class="tab-control">
        <div class="tab-control_item" :class="{active: index===currentindex}"
         v-for="(item,index) in titles" :key="item.id" @click="tabclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>>

<script>
export default {
    name:'tab-control',
    props:{
     titles:{
         type:Array,
         default(){
             return []
         }
     }
    },
    data(){
        return {
            currentindex:0
        }
        
    },
    methods:{
        tabclick(index){
            this.currentindex = index;
            this.$emit('tabclick',index)
        }
    }
}
</script>>

<style scoped>
.tab-control{
  display: flex;
  background: #fff;
}
.tab-control_item{
  line-height: 40px;
    flex: 1;
    text-align: center;
    height: 40px;
    font-size: 15px;
    
}
.active{
    color: var(--color-hight-text);
}
.active span{
    border-bottom: 2px solid var(--color-hight-text);
    padding: 5px;
}
</style>