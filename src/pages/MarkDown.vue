<template>
    <div class="container">
        <div class="row">
            <h1 class="text-center">MarkDown</h1>
            <div class="col-6 vh-100 px-0">
                <textarea class="w-100 h-100" @input="update" ref="markeddownTextArea"></textarea>
            </div>
            <div class="col-6 border border-dark vh-100 bg-light" v-html="markedText"></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked';
// import debounce from '../utilities/mixins/debounce.js';
import useDebounce from '../utilities/composition/useDebounce.js';

export default {
    // mixins: [debounce],
    data() {
        return {
            text: ''
        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    },
    methods: {
        update(e)
        {
            const task = () => this.text = e.target.value;
            this.debounce(task, 500);
        }
    },
    mounted() {
        this.debounce = useDebounce();
        this.$refs.markeddownTextArea.focus();
    }
}
</script>

<style>

</style>