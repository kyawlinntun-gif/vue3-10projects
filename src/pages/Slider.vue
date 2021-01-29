<template>
    <div class="w-100 position-relative" style="height: 350px">
        <div class="position-absolute w-100 h-100" v-for="(slider, index) in sliders" :key="index">
            <transition name="fade">
                <div class="w-100 h-100" :class="slider" v-if="currentSlide === index"></div>
            </transition>
        </div>
        <div class="position-absolute" style="bottom: 0px; right: 50%; transform: translate(50%, 0)">
            <div class="d-flex">
                <div v-for="(slider, index) in sliders" :key="index">
                    <div class="rounded-circle mb-2 m-1" style="width: 15px; height: 15px; cursor: pointer;" :class="currentSlide === index ? 'bg-secondary' : 'bg-dark'" @click="currentSlide = index"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sliders: [
                'bg-primary', 'bg-success', 'bg-secondary'
            ],
            currentSlide: 0,
            interval: ''
        }
    },
    computed: {
        countSlider() {
            return this.sliders.length;
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1;
            // if(this.currentSlide === 2)
            // {
            //     this.currentSlide = 0;
            // }
            // else
            // {
            //     this.currentSlide++;
            // }
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>