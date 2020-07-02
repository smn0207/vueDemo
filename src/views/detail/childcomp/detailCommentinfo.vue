<!--  -->
<template>
    <div class="detailComentinfo" v-if="Object.keys(commentInfo).length!==0">
        <div>
            <h1 style="  text-align: center;">用户评论</h1>
        </div>
        <div v-if="commentInfo.list!==undefined" >
            <div class="info-user">
                <img :src="commentInfo.list[0].user.avatar" alt/>
                <span>{{commentInfo.list[0].user.uname}}</span>
            </div>
            <div class="info-detail">
                <div>{{commentInfo.list[0].content}}</div>
                <div v-if="commentInfo.list[0]!==0">
                    <span>{{commentInfo.list[0].created | showDate}}</span>
                    <span>{{commentInfo.list[0].style}}</span>
                </div>
            </div>
        </div>

        <div v-else>
            <h2>暂无评论</h2>
        </div>

    </div>
</template>

<script>
    import {timeConvert} from 'components/common/utils'

    export default {
        name: "detailComentinfo",
        props: {
            commentInfo: Object
        },
        filters: {
            //过滤器
            showDate(value) {
                //1.将时间戳转换为date函数
                const date = new Date(value * 1000)
                //2. 使用已有的转换函数
                return timeConvert(date, 0)
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
        }
    };
</script>

<style scoped>
    /* @import url(); 引入css类 */
    .info-user img {
        width: 60px;
        height: 60px;
        border-radius: 50px;
    }
</style>
