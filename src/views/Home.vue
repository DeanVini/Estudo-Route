<template>
    <div>
        <div  class="destinaion-container">
            <router-link v-for="(destination) in destinations" :key="destination.id" :to="`/${destination.slug}`">
                <div class= "infos-container">
                    <img :src="`../../images/${destination.image}`" alt="">
                    <div class="infos">
                        <h2>{{ destination.name }}</h2>
                        <p>{{ destination.description }}</p>   
                    </div> 
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getFromBD from '../scripts.js';

let destinations = ref();

onMounted(async () => {
    destinations.value = await getFromBD();
})


</script>

<style scoped>
.destinaion-container{
    display: flex;
    background-color: #ffffff;
    white-space: normal;
    flex-direction: column;
    gap: 40px;
}

.destinaion-container img{
    border-radius: 4px;
    border: 3px solid #ffffff;
    
}


.destinaion-container .infos-container{
    display: flex;
    flex-direction: row !important;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transition: 0.13s;
}

.destinaion-container .infos-container:hover{
   border-bottom: 3px solid #a5a5a5;
   border-left: 3px solid #cfcfcf;
   border-radius: 4px;
}
</style>

