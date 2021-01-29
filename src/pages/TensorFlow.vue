<template>
    <div class="container">
        <div class="m-auto text-center" style="width: 800px">
            <h1>TensorFlow Object Detection</h1>
            <div class="overflow-hidden text-center w-100 h-100">
                <button class="btn btn-primary" @click="openCamera" v-if="!streaming">Open Camera</button>
                <div v-else>
                    <button class="btn btn-primary" style="margin-right: 10px;" @click="stopStreaming">Stop Streaming</button>
                    <button class="btn btn-primary" @click="snapshot">Snapshot</button>
                </div>
                <div v-if="streaming">
                    <video ref="videoRef" autoplay="true" style="width: 250px; height: 300px;" />
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4 overflow-hidden">
                <div style="width: 250px; height: 300;">
                    <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505" class="img-fluid" ref="imgRef" crossorigin="anonymous">
                </div>
            </div>
            <div class="mt-4">
                <button class="btn btn-secondary mb-3" @click="detect">
                    <span v-if="isLoading">Loading ... </span>
                    <span v-else>Detect</span>
                </button>
                <div>
                    <p v-if="predictions.length > 0">
                        {{ predictions[0].class }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default {
    name: 'TensorFlow',
    setup() {
        const imgRef = ref("");
        const predictions = ref([]);
        const isLoading = ref(false);
        const videoRef = ref('');
        const streaming = ref(false);

        async function detect()
        {
            isLoading.value = true;
            const img = imgRef.value;
            const model = await cocoSsd.load();
            predictions.value = await model.detect(img);
            isLoading.value = false;
        }

        async function openCamera() {
            streaming.value = true;
            if(navigator.mediaDevices.getUserMedia) {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const cams = devices.filter(device => device.kind == 'videoinput');
                const camId = cams[0].groupId;
                navigator.mediaDevices.getUserMedia({ video: { groupId: { exact : camId } } })
                .then((stream) => {
                    videoRef.value.srcObject = stream;
                })
            }
        }
        
        function stopStreaming() {
            const stream = videoRef.value.srcObject;
            const tracks = stream.getTracks();
            tracks.map((track) => track.stop());
            streaming.value = false;
        }

        function snapshot() {
            const canvas  =document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            ctx.drawImage(videoRef.value, 0, 0, 200, 200);
            const data = canvas.toDataURL("image/png");
            imgRef.value.setAttribute("src", data);
        }

        return { imgRef, predictions, detect, isLoading, openCamera, videoRef, streaming, stopStreaming, snapshot };
    }
}
</script>

<style>

</style>