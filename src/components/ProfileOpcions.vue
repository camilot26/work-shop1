<template>
  <div class="divnav">
    <!-- <RouterLink to="/"></RouterLink> -->
    <!-- <RouterLink to="/Team"></RouterLink>
        <RouterLink to="/Projects"></RouterLink>
        <RouterLink to="/Connections"></RouterLink> -->
  </div>

  <div class="parent">
    <div class="div1">
      <button
        :class="[activeButton === 'Profile' ? 'active' : 'btn']"
        @click="toggleActive('Profile')"
      >
        <img
          class="img-icons"
          src="/src/assets/imagesRiwi/alarmpng.png"
          alt="logo"
        />
        Profile
      </button>
    </div>
    <div class="div2">
      <button
        :class="[activeButton === 'Team' ? 'active' : 'btn']"
        @click="toggleActive('Team')"
      >
        <img
          class="img-icons"
          src="/src/assets/imagesRiwi/alarmpng.png"
          alt="logo"
        />
        Team
      </button>
    </div>
    <div class="div3">   <button
        :class="[activeButton === 'Projects' ? 'active' : 'btn']"
        @click="toggleActive('Projects')"
      >
        <img
          class="img-icons"
          src="/src/assets/imagesRiwi/alarmpng.png"
          alt="logo"
        />
        Projects
      </button></div>
    <div class="div4">   <button
        :class="[activeButton === 'Connections' ? 'active' : 'btn']"
        @click="toggleActive('Connections')"
      >
        <img
          class="img-icons"
          src="/src/assets/imagesRiwi/alarmpng.png"
          alt="logo"
        />
        Connections
      </button></div>
  </div>

  <div id="content" v-show="showContent">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Projects from '@/components/subcomponents/Projects.vue';
import Connections from '@/components/subcomponents/Connections.vue';
import router from '../router/index';
export default defineComponent({
  setup() {
    const activeButton = ref<string>("");
    const router = useRouter();
    const showContent = ref<boolean>(false);
    const name = ref<string>("");

    const toggleActive = (value: string) => {
      if (activeButton.value === value) {
        showContent.value = !showContent.value; // Cambia el estado de activo/inactivo
      } else {
        activeButton.value = value;
        showContent.value = true;
      }
      router.push(`/${value}`);
    };

    return {
      showContent,
      activeButton,
      toggleActive,
    };
  },
});
</script>
<style lang="scss" scoped>
.active {
  border: none;
  color: white;
  background-color: #0093e9;
  padding: 5px 50px;
  cursor: pointer;
  border-radius: 5px;
}
.btn {
  border: none;
  color: rgb(177,176,182);
  background-color: transparent;
  padding: 5px 50px;
  cursor: pointer;
  border-radius: 5px;
}
.img-icons {
  width: 10px;
  height: 10px;
}
.content  router-view {
  margin-top: 100px;
}
// .profile-options {
//     display: flex;
//     align-items: center;

//   }
.nav-options {
  display: flex;
  align-items: center;
  justify-content: center;
}

.parent {
  display: flex;

  align-items: center;
  gap: 50px;
   }
</style>
