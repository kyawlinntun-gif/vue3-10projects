<template>
    <button class="px-2 py-2 my-4 rounded" @click="isModalOpen = true">Add User</button>
    <teleport to='body'>
        <Modal v-if="isModalOpen" @isModalClose="isModalOpen = false">
            <template #header>
                Add New User
            </template>
            <template #body>
                <form @submit.prevent="addUser">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" v-model="state.form.name">
                    </div>
                    <div class="from-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" v-model="state.form.email">
                    </div>
                    <div class="form-group">
                        <label for="avatar">Avatar</label>
                        <input type="text" id="avatar" class="form-control" v-model="state.form.avatar">
                    </div>
                    <button type="submit" class="px-1 py-1 mt-2">Add User</button>
                </form>
            </template>
        </Modal>
    </teleport>
</template>

<script>
import Modal from '../Modal.vue';
import { ref, reactive } from 'vue';
import axios from '../../plugins/axios.js';

export default {
    name: 'Create',
    components: {
        Modal
    },
    emits: [
        'add-new-user'
    ],
    setup(_, {emit}) {
        const isModalOpen = ref(false);

        const state = reactive({
            form: {
                name: '',
                email: '',
                avatar: ''
            }
        });

        async function addUser() {
            const { data } = await axios.post('/users', state.form);
            // state.users.push(data);
            emit('add-new-user', data)
            isModalOpen.value = false;
            resetForm();
        }

        function resetForm() {
            state.form.name = '';
            state.form.email = '';
            state.form.avatar = '';
        }

        return { isModalOpen, state, addUser, resetForm };
    }
}
</script>

<style>

</style>