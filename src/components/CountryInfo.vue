<template>
    <div v-for="experience in countryDB.experences" :key="experience.key"  class="places-container">
        <div class="img-container">
            <img class="place-pic" :src="`../public/images/${experience.image}`" alt="">
        </div>

        <div class="content">
            <h3>{{ countryDB }}</h3>
            <p></p>
        </div>

        <div class="read-more">
            <button class="btn">Teste</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch } from "vue";

const props = defineProps(['countryDB']);

onMounted(()=>{
    console.log(props?.countryDB);
});

</script>

<style scoped>

</style>