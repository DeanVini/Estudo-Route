<template>
    <div class="ele-ta-sem-zap">
    <div  class="destinaion-container">
            <router-link v-for="destination in destinations" :key="destination.id" :to="`/${destination.slug}`">
                <div class="infos-container">
                    <img src="../../public/images/brazil.jpg" alt="">
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
import axios from 'axios';
import { onMounted, ref } from "vue";

let destinations = ref();

onMounted(() => {
    getDestinations();
})

async function getDestinations(){
    const response = await axios.get('http://localhost:3000/destinations');
    destinations.value = response.data; 

    console.log(destinations.value);
}
</script>

<style scoped>
.destinaion-container{
    display: flex;
    background-color: #ffffff;
    white-space: normal;
    flex-direction: column;
}

.destinaion-container img{
    border-radius: 4px;
    border: 3px solid #ffffff;
}

.ele-ta-sem-zap{
}

.destinaion-container .infos-container{
    flex-direction: row !important;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>

