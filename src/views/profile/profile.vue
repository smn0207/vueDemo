<template>
    <div>
        我的
        <scroll class="content" :probe-type='1'>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
            <div>nihap</div>
        </scroll>
        <popup class="popup"/>
    </div>
</template>>

<script>
    import scroll from "components/common/scroll/scroll";
    import popup from 'components/content/Popup/Popup'

    export default {
        name: 'profile',
        components: {
            scroll,
            popup
        }
    }
</script>>

<style scoped>
    .content {
        height: 200px;
        overflow: hidden;
    }

    .popup {
        position: relative;
        margin: 0 auto;
        left: 23%;
        z-index: 20;
    }
</style>
