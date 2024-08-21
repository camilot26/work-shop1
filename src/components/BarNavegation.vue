<template>
  <div class="bar-navegation">
    <div class="sidebar">
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/opened-email.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/copy-two.png"
          alt="logo"
        /></a
      >
      <a href="#"
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/line.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/shopping.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/graduation.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/truck10_122382.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/email.png"
          alt="logo"
        /></a>
        <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/message1_114816.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/message1_114816.png"
          alt="logo"
        /></a
      >
      <a href="#" 
        ><img
          class="img-icons"
          src="/src/assets/imagesRiwi/message1_114816.png"
          alt="logo"
        /></a
      >
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.bar-navegation {
  width: 10%;
 margin-left: 20px;
 background-color: white;

  @media (max-width: 768px) {
    display: none;
  }
}
.sidebar {
  display: flex;

  flex-direction: column;
  gap: 10px;
}


.sidebar a:hover {
  
  transform: scale(1.4);
}
.img-icons {
  width: 15px;
  height: 15px;
}
</style>
