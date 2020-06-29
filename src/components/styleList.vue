<template>
<!-- 明星首页的列表页   -->
        <div class="container">
            <div class="row">
                <div class="col-lg-3 star-item" v-for="(item,i) in page.records">
                    <img :src="item.starimgUrl" @click="goToStyleDetail(item.starStyleId)">
                    <strong>{{item.starName}}</strong>|
                    <span>喜欢人数:{{item.likeNum}}</span>
                    <p>{{item.styleDesc}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 page">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" @click="goToPage(page.current-1)">Previous</a></li>
                        <template v-for="i in page.pages">
                            <template v-if="i==page.current">
                                <li class="page-item active"><a class="page-link" href="javascript:void(0)" @click="goToPage(i)">{{i}}</a></li>
                            </template>
                            <template v-else>
                                <li class="page-item"><a class="page-link" href="javascript:void(0)" @click="goToPage(i)">{{i}}</a></li>
                            </template>
                        </template>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" @click="goToPage(page.current+1)">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "styleList",
        data(){
            return {
                code: "",
                msg: "",
                page:{
                    current: "",
                    pages: "",
                    records:[{
                        createTime: "",
                        likeNum: "",
                        photoId: "",
                        starId: "",
                        starName: "",
                        starStyleId: "",
                        starWeardescription: "",
                        starimgUrl: "",
                        styleDesc: "",
                        styleId: "",
                        styleName: "",
                    }],
                    size:"",
                    total:"",
                }
            }
        },
        created() {
            this.$axios.get("/api/star/listAll")
                .then(res => {
                    // console.log(res.data);
                    var str = JSON.stringify(res.data);//转化为json字符串
                    var objR = JSON.parse(str);//转化为json对象
                    this.code = objR.code;
                    this.msg = objR.msg;
                    //开始赋值
                    this.page = objR.object;
                    console.log(this.page);
                })
                .catch(
                    function(err){
                        console.log(err);
                    }
                )
        },
        methods:{
            //跳转页面
            goToPage(index){
                //判断上一页和下一页的页码判断，防止越界
                if(index<1){
                    alert("已经到头了！");
                    return;
                }
                if(index>this.page.pages){
                    alert("已经到底了！");
                    return;
                }
                //请求数据
                this.$axios.get("/api/star/listAll",{
                    params: {
                        startPage: index
                    }
                }).then(res => {
                        // console.log(res.data);
                        var str = JSON.stringify(res.data);//转化为json字符串
                        var objR = JSON.parse(str);//转化为json对象
                        this.code = objR.code;
                        this.msg = objR.msg;
                        //开始赋值
                        this.page = objR.object;
                        console.log(this.page);
                    })
                    .catch(
                        function(err){
                            console.log(err);
                        }
                    )
            },
            goToStyleDetail(starStyleId){
                this.$router.push({
                    path: '/StyleDetail',
                    // name: 'mallList',
                    query: {
                        starStyleId: starStyleId
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .star-item{
        width:200px;
        height: 300px;
    }

    .star-item img{
        width: 100%;
        height: 60%;
    }

    .pagination{
        margin-left:38%;
    }
</style>