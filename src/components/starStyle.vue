<template>
    <el-container id="styleContainer">
        <el-header>明星穿搭轮播图==={{all.get(0)}}</el-header>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <img />
                    </div>
                </el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </el-main>
        <el-main>
            <el-row gutter="15">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <img :src="url"/>
                    </div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "StarStyle",
        data(){
            return {
                all:[]
            }
        },
        created() {
            // data.all = getAll()
            this.$axios.get("/api/star/index")
                .then(
                    function(res){
                        var str = JSON.stringify(res.data);
                        console.log(JSON.parse(str));
                    }
                )
                .catch(
                    function(err){
                        console.log(err);
                    }
                )
        }
    }
</script>

<style scoped>

</style>