<template>
    <div id="login-wrapper">
        <div class="container">
            <div class="row px-2">
                <div class="col-6" 
                    data-aos="flip-down"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                >
                    <form action="" class="px-3" @submit.prevent="handleRegister">
                        <div class="title-form">
                            <h3 class="text-center fw-bold fs-2 m-0">Register</h3>
                            <p class="text-center fs-6">Please input your login details to gain access</p>
                        </div>
                        <div class="form-input mt-3">
                            <div class="form-input-wrapper d-flex align-items-center py-2">
                                <i class="fa-solid fa-envelope px-3"></i>
                                <input 
                                    type="text"
                                    placeholder="Email"
                                    v-model="inputemail"
                                    class="fs-6"
                                >
                            </div>
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
                        <button class="mt-4 w-100 p-2">Register <i class="fa-solid fa-angle-right"></i></button>
                    </form>
                    <div class="mt-4 text-center register">
                        Already have an account?
                        <router-link to="/Login" class="text-decoration-none">
                            <span>Login now</span>
                        </router-link>
                    </div>
                </div>
                <div class="col-6" 
                    data-aos="flip-left"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                >
                    <div class="image-login">
                        <img src="@/assets/images/image-register.jpg" alt="">
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
    name: 'Register-App',
    data(){
        return{
            inputemail: '',
            inputname: '',
            inputpass: ''
        }
    },
    methods:{
        handleRegister(){
            let data = {
                email: this.inputemail,
                username: this.inputname,
                password: this.inputpass
            }
            let url = process.env.VUE_APP_URL_API + '/register'
            axios   
                .post(url, JSON.stringify(data),{
                    headers: {
                        'Content-Type': 'application/json',
                    }, timeout: 20000
                })
                .then(response =>{
                    console.log(response.data)
                    if(response.data.status === "success"){
                        this.$store.state.toast.toastFc.success(response.data.message, {timeout: 3000});
                        router.push('/login')
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