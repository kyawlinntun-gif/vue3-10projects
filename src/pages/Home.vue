<template>
    <div class="container">
        <div class="m-auto text-center">
            <h1>Welcome to Vue 3 Full Course</h1>
            <h5>10 Apps in 10 Hours</h5>
            <ol style="width: 200px;" class="m-auto">
                <li>DcHeros</li>
                <li>Calendar</li>
                <li>Markdown</li>
                <li>Slider</li>
                <li>Calculator</li>
                <li>ResuableModal</li>
                <li>Chat</li>
                <li>UserCrud</li>
                <li>TensorFlow</li>
                <li>Login Modal</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAuth: this.$store.state
        }
    }
}
</script>

<style>

</style>