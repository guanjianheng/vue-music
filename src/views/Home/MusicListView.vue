<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>新歌榜</h3>
                <a href="#">更多</a>
            </div>
            <div class="list clearfix">
                <div class="item">
                    <div class="img-wrapper">
                        <img src="https://pic2.zhimg.com/v2-55a536f08f03cdb835b4b4ed13039c34_1440w.jpg?source=172ae18b" alt="">
                    </div>
                    <div class="main">321123</div>
                    <div class="gary">4564564</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>