<template>
<!-- 轮播图完成   -->
    <div class="row">
        <div class="col-lg-4" v-for="(record,index) in records">
            <div :id="'demo' + index" class="carousel slide" data-ride="carousel">
                <!-- 指示符 -->
                <!--                <ul class="carousel-indicators">-->
                <!--                    <li :data-target="'#demo' + index" data-slide-to="0" class="active"></li>-->
                <!--                    <li :data-target="'#demo' + index" data-slide-to="1"></li>-->
                <!--                    <li :data-target="'#demo' + index" data-slide-to="2"></li>-->
                <!--                </ul>-->
                <!-- 轮播图片 -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="record.photos[0].starimgUrl" class="car-img">
                    </div>
                    <div class="carousel-item" v-for="(item,i) in record.photos" v-if="i>=1">
                        <img :src="item.starimgUrl" class="car-img">
                    </div>
                </div>
                <div class="info">
                    <span>喜欢人数：{{record.tss.likeNum}}</span>
                    <p>{{record.tss.styleDesc}}</p>
                    <button class="btn btn-info" @click="goToStyleDetail(record.tss.starStyleId)">详情...</button>
                </div>
                <!--                &lt;!&ndash; 左右切换按钮 &ndash;&gt;-->
                <!--                <a class="carousel-control-prev" :href="'#demo' + index" data-slide="prev">-->
                <!--                    <span class="carousel-control-prev-icon"></span>-->
                <!--                </a>-->
                <!--                <a class="carousel-control-next" :href="'#demo' + index" data-slide="next">-->
                <!--                    <span class="carousel-control-next-icon"></span>-->
                <!--                </a>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StarStyle",
        data(){
            return {
                code: "",
                msg: "",
                records: [{
                    photos: [{
                        createTime:"",
                        photoId:"",
                        starimgUrl:"",
                        statStyleId:""
                    }],
                    tss:{
                        likeNum:"",
                        starId:"",
                        starStyleId:"",
                        styleDesc:"",
                        styleId:""
                    },
                }]
            }
        },
        created() {
            // data.all = getAll()
            this.$axios.get("/api/star/index")
                .then(res => {
                        console.log(res.data)
                        var str = JSON.stringify(res.data);
                        var objR = JSON.parse(str);
                        this.code = objR.code;
                        this.msg = objR.msg;
                        this.records = objR.object;
                        console.log("records===" + this.records);
                        console.log("url=====" + this.records[0].photos[0].starimgUrl)
                    }
                )
                .catch(
                    function(err){
                        console.log(err);
                    }
                )
        },
        methods:{
            goToStyleDetail(tarStyleId){

            },
        }
    }
</script>


<style scoped>
    .car-img{
         width: 300px;
         height: 450px;
    }
    .info{
        margin-top: 5px;
    }
</style>