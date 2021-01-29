<template>
    <div class="container">
        <section class="text-center">
            <h1>Vue Calendar</h1>
        </section>
        <section class="w-50 m-auto">
            <section class="d-flex justify-content-between mx-4 mb-3">
                <div class="fw-bold">{{ currentMonthName }}</div>
                <div class="fw-bold">{{ currentYear }}</div>
            </section>
            <section class="d-flex">
                <div class="w-50 text-center" v-for="day in days" :key="day">{{ day }}</div>
            </section>
            <section>
                <span class="d-inline-block day-width text-center" v-for="num in startDay()" :key="num"></span>
                <span class="d-inline-block day-width text-center" v-for="num in daysInMonth()" :key="num" :class="currentFullDate(num)">{{ num }}</span>
            </section>
            <section class="d-flex justify-content-between mx-4 mt-3">
                <button class="px-2 border rounded" @click="prev">Prev</button>
                <button class="px-2 border rounded" @click="next">Next</button>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
                currentMonth: new Date().getMonth(),
                currentYear: new Date().getFullYear()
            }
        },
        computed: {
            currentMonthName() {
                return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'});
            }
        },
        methods: {
            daysInMonth() {
                return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
            },
            startDay()
            {
                return new Date(this.currentYear, this.currentMonth, 1).getDay();
            },
            next()
            {
                if(this.currentMonth == 11)
                {
                    this.currentMonth = 0;
                    this.currentYear++;
                }
                else 
                {
                    this.currentMonth++;
                }
            },
            prev()
            {
                if(this.currentMonth == 0)
                {
                    this.currentMonth = 11;
                    this.currentYear--;
                }
                else
                {
                    this.currentMonth--;
                }
            },
            currentFullDate(num)
            {
                // console.log(new Date(this.currentYear, this.currentMonth, num).toDateString());
                // console.log(new Date().toDateString());

                var calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
                var currentFullDate = new Date().toDateString();

                return (calendarFullDate === currentFullDate ? 'text-warning' : null);
            }
        }
    }
</script>

<style>

</style>