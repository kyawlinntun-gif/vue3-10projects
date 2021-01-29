<template>
    <section class="container">
        <div class="m-auto" style="width: 400px">
            <h1>Real Time Chat</h1>
            <div class="border border-1 border-dark rounded" style="height: 500px;">    
                <div class="d-block" v-for="chat in state.chats" :key="chat.userId" :class="chat.userId == userId ? 'text-end': ''">
                    {{ chat.message }}
                </div>
            </div>
            <div class="text-center">
                <input type="text" class="rounded" @keydown.enter="addInput" v-model="state.message">
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
import { chatsRef } from '../utilities/firebase.js';
import { useStore } from 'vuex';

export default {
    name: 'Chat',
    setup() {
        // const chats = ref({});
        const state = reactive({
            chats: [],
            userId: '',
            message: ''
        })
        onMounted(async() => {
            // const db = firebase.database();
            // state.collections = db.ref('chats');
            // const data = await state.collections.once('value');
            // // console.log(data.val());
            // state.chats = data.val();


            // state.collections.on("value", (snapshot) => {
            //     state.chats = snapshot.val();
            // })

            chatsRef.on("child_added", (snapshot) => {
                state.chats.push({key: snapshot.key, ...snapshot.val()});
            });
        })

        function addInput() {
            const newChat = chatsRef.push();

            newChat.set({userId: state.userId, message: state.message});

            state.message = '';
        }

        const store = useStore();
        const userId = computed(() => {
            return store.state.authUser.uid;
        });

        return { state, addInput, userId };
    }
}
</script>

<style>

</style>