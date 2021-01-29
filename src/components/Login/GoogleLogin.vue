<template>
    <section class="text-center mt-3">
        <button class="btn btn-light border border-dark" @click="loginWithGoogle">Login With
            Google</button>
    </section>
</template>

<script>
import firebase from '../../utilities/firebase';

export default {
    name: 'GoogleLogin',
    methods: {
        loginWithGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(() => {
                    this.$emit('isGoogleLoginClose');
                });
        }
    }
}
</script>

<style>

</style>