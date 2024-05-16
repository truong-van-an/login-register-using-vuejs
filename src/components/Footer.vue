<template>
    <footer class="mt-5">
        <div class="footer-wrapper">
            <div class="container d-flex">
                <div class="col-3">
                    <div class="logo-wrapper d-flex align-items-center">
                        <div class="image-logo">
                            <img src="@/assets/images/LOGO-ANDEV.png" alt="">
                        </div>
                        <h3>An Dev</h3>
                    </div>
                    <ul class="widget-menu contact-info-page mt-2">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                            <span>Trương Văn An</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>Bạch Hạ - Phú Xuyên - Hà Nội</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span>0123456789</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span>andev@gmail.com</span>
                        </li>
                    </ul>
                    <ul class="widget-menu social-network d-flex">
                        <li style="--clr: #FF0000;" class="mr-2">
                            <a target="_blank" href="https://www.youtube.com/@AnDevFrontend">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li style="--clr:#333;" class="mr-2">
                            <a href="">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h5 class="fw-bold">Về chúng tôi</h5>
                    <ul class="widget-menu about-us">
                        <li>
                            <i class="fa-solid fa-angle-right"></i>
                            <a href="/">Trang chủ</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-angle-right"></i>
                            <a href="">Nạp tiền</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h5 class="fw-bold">Dịch vụ</h5>
                    <ul class="widget-menu servive">
                        <li>
                            <i class="fa-solid fa-angle-right"></i>
                            <a href="/buycode">Mua code miễn phí, có phí</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer-App",

}
</script>

<style>

</style>