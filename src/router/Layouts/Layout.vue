<template>
    <div id="layout-wrapper">
        <Topbar></Topbar>
        <div class="main-content mx-4 mb-5">
            <slot></slot>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Layout-App',
    components:{
        Topbar,
        Footer
    }
}
</script>

<style scoped>
.main-content{
    margin-top: 70px;
}
</style>