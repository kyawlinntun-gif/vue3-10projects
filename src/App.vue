<template>
    <AppHeader @isLogout="authLogout" />
    <router-view></router-view>
    <teleport to='body'>
        <LoginModel v-if="openModal" />
    </teleport>
</template>

<script>
    import firebase from './utilities/firebase';
    import AppHeader from './components/AppHeader';
    import LoginModel from './components/LoginModel';

    export default {
        components: {
            AppHeader,
            LoginModel
        },
        computed: {
            openModal() {
                return this.$store.state.openModal;
            }
        },
        mounted() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.$store.commit('setIsAuth', true);
                    this.$store.commit('getAuthUser', user);
                } else {
                    this.$store.commit('setIsAuth', false);
                    this.$store.commit('getAuthUser', {});
                }
            });
        },
        methods: {
            authLogout() {
                firebase.auth().signOut();
                this.$router.push('/');
            }
        }
    }
</script>

<style>

</style>