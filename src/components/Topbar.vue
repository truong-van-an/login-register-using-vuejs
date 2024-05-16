<template>
    <div id="topbar">
        <div class="topbar-wrapper shadow-sm">
            <div class="mx-4 w-100 d-flex align-items-center">
                <div class="row m-0 w-100 py-1">
                    <div class="logo-wrapper col-2 px-0">
                        <div class="image-logo">
                            <img src="@/assets/images/LOGO-ANDEV.png" alt="">
                        </div>
                        <span class="fw-bold">AN DEV</span>
                    </div>
                    <div class="menu-wrapper px-2 col-7 d-flex align-items-center">
                        <nav class="p-0 flex-row px-2">
                            <ul class="d-flex mb-0 p-0">
                                <li v-for="(menuItem, index) in handleListMenu" :key="index" class="nav-item py-3 px-2">
                                    <template v-if="menuItem.children && menuItem.children.length > 0">
                                        <a class="px-3 py-2" href="javascript:void(0)">
                                            <span>{{ menuItem.name }}</span>
                                            <i class="fa-solid fa-caret-down"></i>
                                        </a>
                                    </template>
                                    <template v-else>
                                        <router-link class="px-3 py-2" :to="menuItem.link">{{ menuItem.name }}</router-link>
                                    </template>
                                    <ul v-if="menuItem.children && menuItem.children.length > 0" class="submenu p-0">
                                        <li v-for="(childItem, childIndex) in menuItem.children" :key="childIndex" class="px-3 py-2">
                                            <router-link :to="childItem.link">{{ childItem.name }}</router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="right-sidebar col-3 p-0 d-flex align-items-center justify-content-end">
                        <div class="right-sidebar-body d-flex align-items-center">
                            <div class="profile-user px-2">
                                <div class="user-image">
                                    <img src="@/assets/images/user.png" alt="">
                                </div>
                            </div>
                            <div class="border-sidebar mx-2"></div>
                            <div @click="handleLogout" class="px-2 btn-logout-wrapper">
                                <router-link class="btn-logout px-3" to="/Login"><i class="fa-solid fa-right-from-bracket"></i> Logout</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar-App',
    data(){
        return{
            listMenu: JSON.parse(sessionStorage.getItem('list-menu'))
        }
    },
    computed:{
        handleListMenu() {
            // Lọc ra các mục có parentId là 0 (menu cấp cao nhất)
            const topLevelMenu = this.listMenu.filter(item => item.parentId === 0);
            // Thêm các mục con vào menu cấp cao
            topLevelMenu.forEach(menuItem => {
                menuItem.children = this.listMenu.filter(childItem => childItem.parentId === menuItem.id);
            });
            return topLevelMenu;
        }
    },
    methods:{
        handleLogout(){
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('list-menu')
        }
    }
}
</script>

<style>
.fa-caret-down{
    margin-left: 5px;
}
</style>