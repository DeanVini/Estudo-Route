<template>
    <CountryInfo v-if="boolTest" :countryDB="countryData[0]"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CountryInfo from '../components/CountryInfo.vue';
import getFromDB from '../scripts';

let countryData = ref([]);
let boolTest = ref(false);


onMounted(async()=>{
    countryData.value = await getFromDB();
    countryData.value = countryData.value.filter(country => (country.name == 'Hawaii'));
    boolTest.value = true;
});

</script>

<style scoped>

</style>

