<template>
    <div className="header-gradient px-4 py-2 text-white">
        <router-link v-for="list in lists" :key="list.title" class="mx-2 text-white text-decoration-none" :to="list.to" >{{ list.title }}</router-link>
        <div v-if="isAuth" class="mx-2 d-inline-block" style="cursor:pointer;" @click="$emit('isLogout')">Logout</div>
        <div v-else class="mx-2 d-inline-block" style="cursor:pointer;" @click="isLoginOpen">Login</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {'title': 'DcHeros', to: '/dcheros'},
                {'title': 'Calendar', to: '/calendar'},
                {'title': 'MarkDown', to: '/markdown'},
                {'title': 'Slider', to: '/slider-caurosel'},
                {'title': 'Calculator', to: '/calculator'},
                {'title': 'Modal', to: '/resuableModal'},
                {'title': 'Chat', to: '/chat'},
                {'title': 'User Crud', to: '/user-crud'},
                {'title': 'TensorFlow', to: '/tensorflow'}
            ]
        }
    },
    computed: {
        isAuth() {
            return this.$store.state.isAuth;
        }
    },
    methods: {
        isLoginOpen() {
            this.$store.commit('setLoginModal', true);
        }
    }
}
</script>

<style>
    .header-gradient {
        background-image: linear-gradient(to right, rgba(0,0,255,1), rgb(0,0,255,0));
    }
</style>