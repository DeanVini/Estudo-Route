<template>
    <CountryInfo v-if="onMounted(countryData)" :countryDB="countryData"/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getFromDB from '../scripts.js';
import CountryInfo from "../components/CountryInfo.vue";

const countryData = ref([]);
let brazilInfo = ref({});

onMounted(async()=>{
    countryData.value = await getFromDB();
    
});

</script>

<style scoped>

</style>

