<template>
<!--  风格详情页  -->
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <!--                     指示符 -->
                    <ul class="carousel-indicators pointer">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <!--                     轮播图片 -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="photos[0].starimgUrl" class="car-img">
                        </div>
                        <div class="carousel-item" v-for="(item,i) in photos" v-if="i>=1">
                            <img :src="item.starimgUrl" class="car-img">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h3>{{tstarStyle.styleDesc}}</h3>
                    </div>
                    <div class="card-body">
                        <div class="info">
                            <span>喜欢人数：</span><strong>{{tstarStyle.likeNum}}</strong>
                        </div>
                        <!--        店铺信息                -->
                        <h3>{{tstore.sName}}</h3>
                        <div class="img-div">
                        <!--           商店logo，点击跳转到店铺详情页                 -->
                            <img :src="tstore.sImg" @click="goToStore(tstore.sId)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StyleDetail",
        data(){
            return {
                code:"",
                msg:"",
                //轮播图照片数组
                photos: [
                    {
                        photoId: "",
                        createTime: "",
                        statStyleId: "",
                        starimgUrl: ""
                    }
                ],
                //明星风格
                tstarStyle: {
                    starId: "",
                    styleDesc: "",
                    starStyleId: "",
                    likeNum: "",
                    styleId: ""
                },
                //明星信息
                tstar: {
                    id: "",
                    starName: "",
                    starWeardescription: ""
                },
                //商店信息
                tstore: {
                    sId: "",
                    sLogo: "",
                    sDescribe: "",
                    sImg: "",
                    bId: "",
                    sName: ""
                },
                tGoodsId: "",//商品id
            }
        },
        created() {
            this.showStyleDetail(this.getStyleId());
        },
        methods:{
            getStyleId(){//获得从明星风格列表页传过来的数据
                return this.$route.query.starStyleId;
            },
            showStyleDetail(styleId){//后端请求数据，展示明星风格详情页
                this.$axios.get("/vm/star/detail",{params:{starStyleId:styleId}})
                    .then(res => {
                            console.log(res.data.tstarStyle)
                            var str = JSON.stringify(res.data);
                            var objR = JSON.parse(str);
                            this.code = objR.code;
                            this.msg = objR.msg;
                            this.photos = objR.object.photos;
                            this.tstarStyle = objR.object.tstarStyle;
                            this.tstar = objR.object.tstar;
                            this.tstore = objR.object.tstore;
                            this.tGoodsId = objR.object.tGoodsId;
                            console.log(this.photos)
                        }
                    )
                    .catch(
                        function(err){
                            console.log(err);
                        }
                    )
            },
            goToStore(sid){//跳转到商店详情页
                this.$router.push({
                    path: '/StoreDetail',
                    // name: 'mallList',
                    query: {
                        storeId: sid
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .car-img{
        width: 450px;
        height: 600px;
    }
    .pointer{
        position: absolute;
        bottom: 30px;
    }
    .info span{
        color: red;
    }

    .img-div img{
        height: 100%;
        width: 100%;
    }
</style>