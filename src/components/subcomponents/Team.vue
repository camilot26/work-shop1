<template>
 <div class="container">
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="React Logo" class="icon">
                <h2></h2>
                <button class="star-btn">★</button>
            </div>
            <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.</p>
            <div class="team">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
            </div>
            <div class="tags">
                <span class="tag">React</span>
                <span class="tag">MUI</span>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="React Logo" class="icon">
                <h2>React Developers</h2>
                <button class="star-btn">★</button>
            </div>
            <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.</p>
            <div class="team">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
            </div>
            <div class="tags">
                <span class="tag">React</span>
                <span class="tag">MUI</span>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="React Logo" class="icon">
                <h2>React Developers</h2>
                <button class="star-btn">★</button>
            </div>
            <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.</p>
            <div class="team">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
            </div>
            <div class="tags">
                <span class="tag">React</span>
                <span class="tag">MUI</span>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="React Logo" class="icon">
                <h2>React Developers</h2>
                <button class="star-btn">★</button>
            </div>
            <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.</p>
            <div class="team">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Team Member">
            </div>
            <div class="tags">
                <span class="tag">React</span>
                <span class="tag">MUI</span>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
      
    };
  },
});
</script>
<style lang="scss" scoped>


.container {
    display: flex;
    margin-top: 20px;
    align-items:center ;
    flex-wrap: wrap;
    padding: 10px;
    
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(191, 176, 176);
    width: 300px;
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.star-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

.team {
    display: flex;
    margin: 10px 0;
}

.team img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 5px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
}

.tag {
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 5px 5px 0 0;
    font-size: 12px;
} 
</style>
