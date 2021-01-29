<template>
    <div>
        <div class="position-absolute top-0 h-100 w-100 bg-secondary" style="opacity: 0.7;"
            @click="$emit('isModalClose')"></div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div class="p-3 bg-white rounded">
                <div style="width:400px;" class="border border-dark rounded p-3">
                    <h1>
                        <slot name="header"></slot>
                    </h1>
                    <main>
                        <slot name="body"></slot>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style>

</style>