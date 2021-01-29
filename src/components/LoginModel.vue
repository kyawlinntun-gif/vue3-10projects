<template>
    <div>
        <div class="position-absolute top-0 h-100 w-100 bg-secondary" style="opacity: 0.7;"
            @click="isLoginClose"></div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div class="p-3 bg-white rounded">
                <div style="width:400px;" class="border border-dark rounded p-3">
                    <h1 class="text-center">Login</h1>
                    
                    <google-login @isGoogleLoginClose="closeGoogleLoginModal"></google-login>

                    <p class="text-center mt-3">Or</p>
                    <form @submit.prevent="submit">
                        <div class="form-group mt-2">
                            <label for="email">Email or Username</label>
                            <input type="text" class="form-control" placeholder="Enter your email or username"
                                v-model="form.email">
                        </div>
                        <div class="form-group mt-2">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" placeholder="Enter your password"
                                v-model="form.password">
                        </div>
                        <button class="btn btn-danger mt-2">
                            <span v-if="!isLoading">Login</span>
                            <span v-else>⏳</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from '../utilities/firebase';
    import GoogleLogin from './Login/GoogleLogin.vue';

    export default {
        name: 'LoginModel',
        components: {
            GoogleLogin
        },
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                isLoading: false
            }
        },
        methods: {
            submit() {
                this.isLoading = true;
                firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(() => {
                        this.form.email = '';
                        this.form.password = '';
                        this.isLoading = false;
                        this.$store.commit('setLoginModal', false);
                    })
                    .catch(() => {
                        this.isLoading = false;
                    });
            },
            closeGoogleLoginModal() {
                this.$emit('isLoginClose');
            },
            isLoginClose() {
                this.$store.commit('setLoginModal', false);
            }
        }
    }
</script>

<style>

</style>