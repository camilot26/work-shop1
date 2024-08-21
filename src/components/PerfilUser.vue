<template>
  <div class="profile-header">
    <div class="profile-general"></div>
    <div class="profile-info">
      <div class="profile-user">
        <img
          src="/src/assets/imagesRiwi/perfilpng.png"
          alt="Foto de perfil de John Doe"
          class="profile-picture"
        />
        <div class="profile-info1">
          <h2 class="f-20">John Doe</h2>
          <ul class="f-10">
            <li>
              <i>
                <img
                  class="img-profile1"
                  src="/src/assets/imagesRiwi/paleta.png"
                  alt=""
                  srcset=""
                />
              </i>
              Coder
            </li>
            <li>
              <i>
                <img
                  class="img-profile1"
                  src="/src/assets/imagesRiwi/ubicacion.png"
                  alt=""
                  srcset=""
                />
              </i>
              Medellín
            </li>
            <li>
              <i>
                <img
                  class="img-profile1"
                  src="/src/assets/imagesRiwi/calendario.png"
                  alt=""
                  srcset=""
                />
              </i>
              Joined April 2021
            </li>
          </ul>
        </div>
      </div>
      <a></a>
      <button class="connected-button">
        <img
          class="img-profile"
          src="/src/assets/imagesRiwi/media.png"
          alt=""
          srcset=""
        />Connected
      </button>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
//
.profile-header {
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  box-shadow: 10px 5px 5px rgb(191, 176, 176);
  background-color: white;
  margin-right: 60px;
 
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    height: auto;
  }
}
.profile-general {
  width: 100%;
  height: 40vh;
  
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  @media (max-width: 768px) {
    height: 30vh;
  }

  @media (max-width: 480px) {
    height: 20vh;
  }
}
.profile-user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 80px;
  margin-left: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-bottom: 20px;
  }
}
$image-border-size: 2px;
$image-border-color: #f5f5f5;
.profile-picture {
  width: 100px;
  height: 100px;
  display: block;
  border: $image-border-size solid $image-border-color;
  width: 140px; /* Ajusta el tamaño según tus necesidades */
  height: 140px; /* Asegúrate de que la imagen sea cuadrada */
  object-fit: cover;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
}

.profile-info {
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  width: 100%;
  height: 20vh;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}
.profile-info1 {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  margin-top: 70px;
  @media (max-width: 768px) {
    margin-top: 20px;
    align-items: center;
  }
}
.profile-info1 ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  gap: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
}
.connected-button {
  background: #6b53b5;
  color: #fcfcfd;
  border: none;
  padding: 5px 30px;
  border-radius: 5px;
  margin-right: 50px;
  box-shadow: 5px 5px 10px rgb(191, 176, 176);
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    padding: 5px 20px;
    gap: 10px;
  }
}
.img-profile {
  width: 20px;
  height: 20px;
}
.profile-info1 ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: rgb(41, 56, 70);
}
.img-profile1 {
  width: 15px;
  height: 15px;
}
</style>
