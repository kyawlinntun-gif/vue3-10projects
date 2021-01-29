<template>
    <div class="container">
        <div class="text-center">
            <h1>Re-usable Modal</h1>
        </div>
        <div class="d-flex justify-content-center">
            <button class="mt-5 btn btn-primary" @click="modal1 = true" style="margin-right: 10px;">Modal 1</button>
            <button class="mt-5 btn btn-primary" @click="modal2 = true">Modal 2</button>
        </div>
    </div>
    <Modal v-if="modal1" @isModalClose="modal1 = false">
        <template v-slot:header>Modal 1</template>
        <template v-slot:body>This is the body slot from modal 1</template>
    </Modal>
    <Modal v-if="modal2" @isModalClose="modal2 = false">
        <template v-slot:header>Modal 2</template>
        <template v-slot:body>This is the body slot from modal 2</template>
    </Modal>
</template>

<script>
import Modal from '../components/Modal.vue';
import {ref} from 'vue';

export default {
    name: 'ResuableModal',
    components: {
        Modal
    },
    setup() {
        const modal1 = ref(false);
        const modal2 = ref(false);

        return { modal1, modal2 }
    }
}
</script>

<style>

</style>