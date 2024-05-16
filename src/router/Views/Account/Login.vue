<template>
    <div id="login-wrapper">
        <div class="container">
            <div class="row px-2">
                <div class="col-6"
                    data-aos="flip-left"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                >
                    <div class="image-login">
                        <img src="@/assets/images/image-login.png" alt="">
                    </div>
                </div>
                <div class="col-6"
                    data-aos="flip-down"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                >
                    <form action="" class="px-3" @submit.prevent="handleLogin">
                        <div class="title-form">
                            <h3 class="text-center fw-bold fs-2 m-0">Welcome Back An Dev</h3>
                            <p class="text-center fs-6">Please input your login details to gain access</p>
                        </div>
                        <div class="form-input mt-3">
                            <div class="form-input-wrapper d-flex align-items-center py-2">
                                <i class="fa-solid fa-user px-3"></i>
                                <input 
                                    type="text" 
                                    placeholder="Username"
                                    v-model="inputname"
                                    class="fs-6"
                                >
                            </div>
                        </div>
                        <div class="form-input mt-3">
                            <div class="form-input-wrapper d-flex align-items-center py-2">
                                <i class="fa-solid fa-lock px-3"></i>
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    v-model="inputpass"
                                    class="fs-6"
                                >
                            </div>
                        </div>
                        <button class="mt-4 w-100 p-2">Login <i class="fa-solid fa-angle-right"></i></button>
                    </form>
                    <div class="mt-4 text-center register">
                        Don't have an account?
                        <router-link to="/Register" class="text-decoration-none">
                            <span>Signup now</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
    name: 'Login-App',
    data(){
        return{
            inputname : '',
            inputpass: '',
        }
    },
    methods:{
        handleLogin(){
            let data ={
                username: this.inputname,
                password: this.inputpass
            }
            let url = process.env.VUE_APP_URL_API + '/login'
            axios   
                .post(url, JSON.stringify(data),{
                    headers: {
                        'Content-Type': 'application/json',
                    }, timeout: 20000
                })
                .then(response =>{
                    if(response.data.status === "success"){
                        sessionStorage.setItem('token', JSON.stringify(response.data.d.token))
                        sessionStorage.setItem('list-menu', JSON.stringify(response.data.d.listMenu))
                        this.$store.state.toast.toastFc.success(response.data.message, {timeout: 3000});
                        router.push('/')
                    }
                    else{
                        this.$store.state.toast.toastFc.error(response.data.message, {timeout: 3000});
                    }
                })
                .catch(err=>{
                    this.$store.state.toast.toastFc.error(err, {timeout: 3000});
                })
        }
    }
}
</script>

<style>

</style>