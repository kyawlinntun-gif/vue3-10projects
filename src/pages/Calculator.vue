<template>
    <section>
        <div class="m-auto">
            <div class="header text-center mb-5">
                <h1>Calculator</h1>
            </div>
            <div class="container-width m-auto">
                
                <div class="row text-center">
                    <div class="m-0 p-0 mb-3" style="overflow-x: auto;">
                        <div class="border rounded w-100 calculation-show-height text-end">{{ currentNum }}</div>
                        <div style="text-align: left;" v-if="selectedOperation">
                            {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
                        </div>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('1')">1</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('2')">2</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('3')">3</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('+')">+</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('4')">4</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('5')">5</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('6')">6</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('-')">-</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('7')">7</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('8')">8</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('9')">9</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('*')">*</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('c')">C</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('0')">0</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('=')">=</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-secondary shadow mb-2" @click="pressButton('/')">/</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import useWindowEvent from '../utilities/composition/useWindowEvent.js';

export default {
    setup() {
        const operations = ['+', '-', '*', '/'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const currentNum = ref('');
        const prevNum = ref('');
        const selectedOperation = ref('');

        function pressButton(value) {
            if(value === '=' || value === 'Enter') calculate();
            else if(value === 'c') clear();
            else if(operations.includes(value)) applyOperation(value);
            else if(numbers.includes(value)) appendNumber(value);
        }

        function calculate()
        {
            if(selectedOperation.value === '+') sum();
            if(selectedOperation.value === '-') substract();
            if(selectedOperation.value === '*') multiply();
            if(selectedOperation.value === '/') dividedBy();

            selectedOperation.value = '';
            prevNum.value = '';

        }

        function sum()
        {
            currentNum.value = +prevNum.value + +currentNum.value;
        }

        function substract()
        {
            currentNum.value = prevNum.value - currentNum.value;
        }

        function multiply()
        {
            currentNum.value = prevNum.value * currentNum.value;
        }

        function dividedBy()
        {
            currentNum.value = prevNum.value / currentNum.value;
        }

        function clear()
        {
            currentNum.value = '';
        }

        function applyOperation(value)
        {
            calculate();
            prevNum.value = currentNum.value;
            currentNum.value = '';
            selectedOperation.value = value;
        }

        function appendNumber(value)
        {
            currentNum.value = currentNum.value + value;
        }

        const handleKeydown = (e) => pressButton(e.key);
        useWindowEvent("keydown", handleKeydown);

        return { operations, currentNum, prevNum, selectedOperation, pressButton, calculate, clear, appendNumber, applyOperation };
    }
}
</script>

<style>
.container-width {
    width: 150px;
}
.calculation-show-height {
    height: 30px;
}
</style>