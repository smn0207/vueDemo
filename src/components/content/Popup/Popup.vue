<template>
    <div class="popup">
        <div class="content">
            <h2>您已成功添加购物车!</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Popup"
    }
</script>

<style scoped>
    .content {
        width: 36%;
        height: 80px;
        background: black;
        border-radius: 20px;
        opacity: 0.7;
    }

    h2 {
        color: red;
        line-height: 80px;
        text-align: center;
        font-weight: bolder;
    }
    .popup{
        width: 100vh;
        height: 100vh;
        position: fixed;
        top: 33%;
        left: 23%;
        z-index: 20;
    }
</style>
