<script setup lang="ts">
import BodyGeneral from './components/BodyGeneral.vue'
import NavBar from "./components/NavBar.vue";
import PerfilUser from "./components/PerfilUser.vue";
import BarNavegation from "./components/BarNavegation.vue";
import ProfileOpcions from "./components/ProfileOpcions.vue";
</script>

<template>

<div class="parent">
    
    <div class="div1"><BarNavegation/></div>
    <div class="div2"><NavBar /></div>
    <div class="div3"><PerfilUser/></div>
    <div class="div4"><ProfileOpcions/></div>
    
</div>
    
    
    
    
  
</template>

<style>

.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, fr);
    gap: 10px;
}
    
.div1 {
    grid-row: span 2 / span 2;
}

.div2 {
    grid-column: span 4 / span 4;
    
}

.div3 {
    grid-column: span 4 / span 4;
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 2;
    
}

.div4 {
    grid-column: span 4 / span 4;
    grid-column-start: 2;
    grid-row-start: 4;
}

.div5 {
    grid-column: span 4 / span 4;
    grid-column-start: 2;
    grid-row-start: 5;
}
        
</style>
