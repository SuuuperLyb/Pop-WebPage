<template>
    <div>
        <style-carousel></style-carousel>
        <style-list></style-list>
    </div>
</template>

<script>
    import styleCarousel from "../components/carousel";
    import styleList from "../components/styleList";
    export default {
        name: "StyleIndex",
        components: {styleCarousel,styleList},
        created() {
            // this.$axios.all([
            //     this.$axios.get('/api/star/index'  // 替换接口 这是模拟的假数据
            //     ),
            //     this.$axios.get('/api/star/listAll') // 替换接口
            // ]).then(this.$axios.spread((res1, res2) => {
            //     // 上面两个请求都完成后，才执行这个回调方法
            //     console.log('res1', res1);
            //     console.log('res2', res2);
            // }))
        },
        mounted() {
            // this.getCarousel();
            // this.getListByPage();
        },
        methods:{
            //获取轮播图的信息
            getCarousel(){
                this.$axios.get("/vm/star/index")
                    .then(res => {
                            console.log(res.data)
                            // var str = JSON.stringify(res.data);
                            // var objR = JSON.parse(str);
                            // this.code = objR.code;
                            // this.msg = objR.msg;
                            // this.records = objR.object;
                            // console.log("records===" + this.records);
                            // console.log("url=====" + this.records[0].photos[0].starimgUrl)
                        }
                    )
                    .catch(
                        function(err){
                            console.log(err);
                        }
                    )
            },
            getListByPage(){
                this.$axios.get("/vm/star/listAll")
                    .then(res => {
                            console.log(res.data);
                        }
                    )
                    .catch(
                        function(err){
                            console.log(err);
                        }
                    )
            },
        }
    }
</script>

<style scoped>
    .container{
        margin-top: 10px;
    }
</style>