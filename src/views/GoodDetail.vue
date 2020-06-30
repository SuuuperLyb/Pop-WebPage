<template>
<!--  商品详情页面  -->
</template>

<script>
    export default {
        name: "GoodDetail",
        created() {
            this.showDetail(this.getGoodId());
        },
        methods:{
            getGoodId(){
                return this.$route.query.goodId;
            },
            showDetail(gid){//根据商品id展示商品
                this.$axios.get("/vm/star/index")
                    .then(res => {
                            // console.log(res.data)
                            var str = JSON.stringify(res.data);
                            var objR = JSON.parse(str);
                            this.code = objR.code;
                            this.msg = objR.msg;
                            this.records = objR.object;
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

        },
    }
</script>

<style scoped>

</style>