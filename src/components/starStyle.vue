<template>
    <el-container>
        <el-header>明星穿搭轮播图</el-header>
        <el-main>
            <el-row gutter="15">
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "starStyle"
    }
</script>

<style scoped>

</style>