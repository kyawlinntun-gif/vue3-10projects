<template>
    <section class="mt-4">
        <div class="m-auto" style="width:800px;">
            <Create v-on:add-new-user="addUsers" />
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in state.users" :key="user.id">
                        <td>{{ user._id }}</td>
                        <td><img :src="user.avatar" :alt="user.name" class="rounded-circle" style="width: 40px;"></td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <button class="rounded btn btn-danger" @click="destroy(user._id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary" @click="prev" :disabled="state.users.page === 1">Prev</button>
                <button class="btn btn-primary" @click="next" :disabled="state.users.page === state.users.total_pages">Next</button>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import axios from '../plugins/axios';
import Create from '../components/VueCrud/Create.vue';

export default {
    name: 'UserCrud',
    components: {
        Create
    },
    setup() {
        const state = reactive({
            users: [],
            params: {
                page: 1
            },
        });

        onMounted(() => {
            getUsers();
        })

        async function getUsers() {
            const { data } = await axios.get(`/users`, { params: state.params });
            state.users = data;
        }

        function next() {
            state.params.page += 1;
            getUsers();
        }

        function prev() {
            state.params.page -= 1;
            getUsers();
        }

        function addUsers(data) {
            state.users.push(data);
        }

        async function destroy(id) {
            await axios.delete(`/users/${id}`);
            state.users = state.users.filter(user => user._id != id);
        }

        return { state, next, prev, addUsers, destroy };
    }
}
</script>

<style>

</style>