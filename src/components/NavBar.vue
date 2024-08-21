<template>
  <nav class="navbar  p-10">
    <div class="search-container">
      <img
        class="img-icons"
        src="/src/assets/imagesRiwi/search.png"
        alt="logo"
      />
      <input type="text" placeholder="Search" />

      <button type="submit"><i class="fas fa-search"></i></button>
    </div>
    <ul>
      <li>
        <a href="#"
          ><img
            class="img-icons"
            src="/src/assets/imagesRiwi/translate.png"
            alt="logo"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img
            class="img-icons"
            src="/src/assets/imagesRiwi/sun-day-weather-symbol_icon-icons.com_73146.svg"
            alt="logo"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img
            class="img-icons"
            src="/src/assets/imagesRiwi/category.png"
            alt="logo"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img
            class="img-icons"
            src="/src/assets/imagesRiwi/alarmpng.png"
            alt="logo"
        /></a>
        


      </li>
      <li>
        <a href="#"
          ><img
            class="img-perfil"
            src="/src/assets/imagesRiwi/perfilpng.png"
            alt="logo"
        /></a>
        


      </li>
    </ul>
  </nav>
</template>

<script lang="ts"></script>
<style lang="scss" scoped>
.navbar {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 5px 5px rgb(191, 176, 176);
  
  margin-right: 60px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav li {
  margin-right: 10px;
}

.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container input[type="text"] {
  padding: 10px;
  background-color: 
 transparent;
  border: none;
  
  
  width: 50%; /* Ajustamos el ancho al 100% para que sea responsive */
}

.search-container button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer; 

}

.d-middle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-icons {
  width: 20px;
  height: 20px;
}

.img-perfil {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}


@media (max-width: 768px) {
  nav ul {
    display: flex;
  }
  /* Otros ajustes para pantallas pequeñas, si necesario */
}
</style>
