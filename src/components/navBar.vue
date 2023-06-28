<template>
    <nav id="nav">
        <router-link to="/"><img class="icon" src="../../public/map.png" alt="map_icon"></router-link>
        <router-link v-for="destination in destinationData"
                     :key="destination.id"
                     :to="`/${destination.slug}`">{{ destination.name }}</router-link>
    </nav>    

    <div class="container">
        <router-view></router-view>

    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

let destinationData = ref();

onMounted (()=>{
    response();
});

async function response(){
    const responseDestination = await axios.get('http://localhost:3000/destinations');

    destinationData.value = responseDestination.data;

    console.log(destinationData.value);
}


</script>

<style scoped>
.icon{
    width: 40px;
    height: 40px;
    transition: filter 300ms;
}
.icon:hover{
    filter: drop-shadow(0 0 0.5em #0f51caaa);
    transition: filter 300ms;
}

</style>