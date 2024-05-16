<template>
    <Layout>
        <div id="home-wrapper">
            <div class="slider-wrapper">
                <div class="slider-body">
                    <swiper :slidesPerView="1"
                        :loop="true" 
                        :pagination="true" 
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false,
                        }"
                        :modules="modules" 
                        @swiper="onSwiperSlide"
                        class="swiper-slide"
                    >
                        <swiper-slide>
                            <img src="@/assets/images/bannerdev.gif" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/bannerdev2.gif" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/bannerdev3.gif" alt="">
                        </swiper-slide>
                    </swiper>
                    <button class="button-prev" @click="swiperSlide.slidePrev()"><i class="fa-solid fa-caret-left"></i></button>
                    <button class="button-next" @click="swiperSlide.slideNext()"><i class="fa-solid fa-caret-right"></i></button>
                </div>
            </div>
            <section class="mt-5 mb-3">
                <div class="section-function section">
                    <div class="title-section d-flex justify-content-center align-items-center flex-column pt-3">
                        <div class="title-section-content d-block w-100 text-center">
                            <h3 class="m-0">Chức năng</h3>
                        </div>
                    </div>
                    <div class="list-function w-100 position-relative">
                        <div class="list-function-body">
                            <swiper :slidesPerView="4"
                                :spaceBetween="40"
                                :loop="true" 
                                :navigation="false" 
                                :pagination="false" 
                                :autoplay="{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }"
                                :modules="modules" 
                                class="swiper-function"
                            >
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/images/slide-function.png" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/images/slide-function2.png" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/images/slide-function3.png" alt="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/images/slide-function4.png" alt="">
                                </swiper-slide>
                                <swiper-slide class="d-flex justify-content-center align-items-center">
                                    <img style="width: 85%;" src="@/assets/images/slide-function5.png" alt="">
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-5 mx-4 px-3 mt-5 mb-3">
                <div class="section-service section">
                    <div class="title-section d-flex justify-content-center align-items-center flex-column pt-3">
                        <div class="title-section-content d-block w-100 text-center">
                            <h3 class="m-0">Dịch vụ của chúng tôi</h3>
                        </div>
                    </div>
                    <div class="section-service-body">
                        <div class="cards">
                            <div class="row m-0">
                                <div class="card col-3 py-2" v-for="(item,index) in dataService" :key="index">
                                    <div class="card-body p-0">
                                        <div class="card-image">
                                            <img :src="item.image" alt="service">
                                        </div>
                                        <h6 class="py-2 m-0 fw-bold">{{ item.name }}</h6>
                                        <p class="text-center">{{ item.description }}</p>
                                        <a :href="item.link" class="py-1 d-block">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-5 mx-4 px-3 mt-5 mb-3">
                <div class="section-product-new section">
                    <div class="title-section d-flex justify-content-center align-items-center flex-column pt-3">
                        <div class="title-section-content d-block w-100 text-center">
                            <h3 class="m-0">Sản phẩm mới nhất</h3>
                        </div>
                    </div>
                    <div class="section-product-new-body mt-4">
                        <div class="cards position-relative">
                                <swiper :slidesPerView="4"
                                    :spaceBetween="30"
                                    :loop="true" 
                                    :pagination="false"
                                    :autoplay="{
                                        delay: 300000,
                                        disableOnInteraction: false,
                                    }"
                                    :modules="modules" 
                                    @swiper="onSwiper"
                                    class="swiper-product-new px-3 py-5"
                                >
                                    <swiper-slide v-for="(item,index) in dataProductNew" :key="index">
                                        <div class="card p-2">
                                            <div class="card-body p-0">
                                                <div class="card-image">
                                                    <img :src="item.img" alt="service" style="width: 100%;">
                                                </div>
                                                <div class="name-item text-center py-2">
                                                    <h6 class="m-0 py-1 fw-bold text-center d-inline">{{ item.name }}</h6>
                                                </div>
                                                <span class="card-desc text-center" v-html="item.describe"></span>
                                                <div class="image-free text-center" v-if="item.price === 0">
                                                    <img src="@/assets/images/free.png" alt="" width="60">
                                                </div>
                                                <div v-else class="price-item text-center">
                                                    <span>{{ numberWithComas(item.price) }}đ</span>
                                                    <del class="ml-2">{{ item.discount === 0 ? '' : numberWithComas(item.discount) + 'đ'}}</del>
                                                </div>
                                                <div class="d-flex mt-3">
                                                    <div class="add-cart col-6 text-center">
                                                        <a href="#" class="py-1 w-100 py-1 d-block">
                                                            <span>Thêm giỏ hàng</span>
                                                        </a>
                                                    </div>
                                                    <div class="see-details col-6 text-center">
                                                        <a :href="'/detail/'+ item.id" class="py-1 w-100 py-1 d-block">
                                                            <span>Xem chi tiết</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="views-and-downloads d-flex px-1 justify-content-end mt-2">
                                                    <div class="views-card">
                                                        <i class="fa-regular fa-eye"></i>
                                                        <span>{{ item.view }}</span>
                                                    </div>
                                                    <div class="downloads-card">
                                                        <i class="fa-solid fa-download"></i>
                                                        <span>{{ item.download }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                <button class="button-prev" @click="swiper.slidePrev()"><i class="fa-solid fa-caret-left"></i></button>
                                <button class="button-next" @click="swiper.slideNext()"><i class="fa-solid fa-caret-right"></i></button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import Layout from '../Layouts/Layout.vue'
import 'vuetify/dist/vuetify.min.css'
export default {
    name: "Home-App",
    components:{
        Layout,
        Swiper,
        SwiperSlide,
    },
    data() {
      return {
        modules: [Autoplay, Navigation, Pagination],
        dataService:[],
        dataProductNew:[],
        swiper: null,
        swiperSlide: null
      };
    },
    mounted(){
        let token = JSON.parse(sessionStorage.getItem('token'))
        this.getService(token);
        this.getProductNew(token)
        this.$nextTick(()=>{
            let sectionTitle = document.querySelectorAll(".title-section");
            window.addEventListener('scroll', function(){
                document.querySelector(".topbar-wrapper").classList.toggle('active', window.scrollY >10)
                sectionTitle.forEach((item)=>{
                    let heightSction = item.closest('section').getBoundingClientRect().height
                    let topSection = item.offsetTop
                    if(window.scrollY >= topSection -78 && this.window.scrollY <= topSection + heightSction -100){
                        item.closest('.section').classList.add('active')
                    }
                    else{
                        item.closest('.section').classList.remove('active')
                    }
                })
            })
        })
    },
    methods:{
        getService(token){
            let url = process.env.VUE_APP_URL_API + '/service';
            axios
                .get(url,{
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    }, timeout: 20000
                })
                .then(response =>{
                    if(response.data.status === "success"){
                        this.dataService = response.data.d;
                    }
                    else{
                        this.$store.state.toast.toastFc.error(response.data.message, {timeout: 3000});
                    }
                })
                .catch(err=>{
                    this.$store.state.toast.toastFc.error(err, {timeout: 3000});
                })
        },
        getProductNew(token){
            let url = process.env.VUE_APP_URL_API + '/productNew';
            axios
                .get(url,{
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    }, timeout: 20000
                })
                .then(response =>{
                    if(response.data.status === "success"){
                        this.dataProductNew = response.data.d;
                    }
                    else{
                        this.$store.state.toast.toastFc.error(response.data.message, {timeout: 3000});
                    }
                })
                .catch(err=>{
                    this.$store.state.toast.toastFc.error(err, {timeout: 3000});
                })
        },
        onSwiper(swiperInstance) {
            this.swiper = swiperInstance;
        },
        onSwiperSlide(swiperInstance){
            this.swiperSlide = swiperInstance
        },
        numberWithComas(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
        }
    }

}
</script>