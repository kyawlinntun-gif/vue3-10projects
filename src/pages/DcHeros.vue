<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="m-auto">
                <h1 class="text-center">{{ title }} <span v-if="existHero">{{ countHeros }}</span></h1>
                <ul class="list-unstyled">
                    <li v-for="(hero, index) in heros" :key="hero.name" class="d-flex justify-content-between">
                        <div>{{ hero.name }}</div>
                        <button class="btn" @click.prevent="removeHero(index)">x</button>
                    </li>
                </ul>
                <form @submit.prevent="addHero">
                    <input type="text" v-model="newhero" placeholder="Type hero new here" class="border border-light rounded" ref="newHeroRefs">
                    <button :disabled="isDisabled" class="btn btn-danger rounded">Add Hero</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';

export default {
    setup() {

        // Data
        const title = 'Dc Heros';
        // attribute: 'value',
        const newhero = ref('');
        const heros = ref([
            {'name': 'SuperGirl'},
            {'name': 'Flash'},
            {'name': 'Batman'},
            {'name': 'Arrow'},
            {'name': 'SuperMan'}
        ]);
        const isDisabled = ref(false);
        const newHeroRefs = ref('');

        // Methods
        function addHero() {
            if(newhero.value !== '')
            {
                heros.value.unshift({'name': newhero.value});
                newhero.value = '';
            }
        }

        function removeHero(index)
        {
            heros.value = heros.value.filter((hero, i) => {
                return i !== index; 
            });
        }

        // Computed
        const countHeros = computed({
            get: () => {
                return heros.value.length;
            }
        });

        const existHero = computed({
            get: () => {
                return !(heros.value.length <= 0);
            }
        });

        // Mounted
        onMounted(() => {
            newHeroRefs.value.focus();
        });

        return { title, heros, newhero, isDisabled, addHero, removeHero, countHeros, existHero, newHeroRefs }
    }
}
</script>

<style>

</style>