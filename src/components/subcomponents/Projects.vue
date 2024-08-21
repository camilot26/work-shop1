<template>
   <div class="container">
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Profile Picture" class="profile-pic">
                <div class="card-menu">⋮</div>
            </div>
            <h2>Mark Gilbert</h2>
            <p>UI Designer</p>
            <div class="tags">
                <span class="tag">Figma</span>
                <span class="tag">Sketch</span>
            </div>
            <div class="stats">
                <div class="stat">
                    <span class="number">18</span>
                    <span class="label">Projects</span>
                </div>
                <div class="stat">
                    <span class="number">834</span>
                    <span class="label">Tasks</span>
                </div>
                <div class="stat">
                    <span class="number">129</span>
                    <span class="label">Connections</span>
                </div>
            </div>
            <div class="actions">
                <button class="btn connected">Connected</button>
                <button class="btn message">✉</button>
            </div>
        </div>
        <!-- Repeat similar card structure for other profiles -->
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Profile Picture" class="profile-pic">
                <div class="card-menu">⋮</div>
            </div>
            <h2>Mark Gilbert</h2>
            <p>UI Designer</p>
            <div class="tags">
                <span class="tag">Figma</span>
                <span class="tag">Sketch</span>
            </div>
            <div class="stats">
                <div class="stat">
                    <span class="number">18</span>
                    <span class="label">Projects</span>
                </div>
                <div class="stat">
                    <span class="number">834</span>
                    <span class="label">Tasks</span>
                </div>
                <div class="stat">
                    <span class="number">129</span>
                    <span class="label">Connections</span>
                </div>
            </div>
            <div class="actions">
                <button class="btn connected">Connected</button>
                <button class="btn message">✉</button>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Profile Picture" class="profile-pic">
                <div class="card-menu">⋮</div>
            </div>
            <h2>Mark Gilbert</h2>
            <p>UI Designer</p>
            <div class="tags">
                <span class="tag">Figma</span>
                <span class="tag">Sketch</span>
            </div>
            <div class="stats">
                <div class="stat">
                    <span class="number">18</span>
                    <span class="label">Projects</span>
                </div>
                <div class="stat">
                    <span class="number">834</span>
                    <span class="label">Tasks</span>
                </div>
                <div class="stat">
                    <span class="number">129</span>
                    <span class="label">Connections</span>
                </div>
            </div>
            <div class="actions">
                <button class="btn connected">Connected</button>
                <button class="btn message">✉</button>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img src="/src/assets/imagesRiwi/perfilpng.png" alt="Profile Picture" class="profile-pic">
                <div class="card-menu">⋮</div>
            </div>
            <h2>Mark Gilbert</h2>
            <p>UI Designer</p>
            <div class="tags">
                <span class="tag">Figma</span>
                <span class="tag">Sketch</span>
            </div>
            <div class="stats">
                <div class="stat">
                    <span class="number">18</span>
                    <span class="label">Projects</span>
                </div>
                <div class="stat">
                    <span class="number">834</span>
                    <span class="label">Tasks</span>
                </div>
                <div class="stat">
                    <span class="number">129</span>
                    <span class="label">Connections</span>
                </div>
            </div>
            <div class="actions">
                <button class="btn connected">Connected</button>
                <button class="btn message">✉</button>
            </div>
        </div>
    </div>

  
</template>
<script>
</script>
<style lang="scss" scoped>


.container {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px;
    margin-right: 17px;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(191, 176, 176);
    width: 300px;
    margin: 10px;
    padding: 20px;
    
    box-sizing: border-box;
    text-align: center;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-left: 100px;
}

.card-menu {
    
    font-size: 24px;
}

.tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
}

.tag {
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 5px 10px;
    margin: 5px;
    font-size: 12px;
}

.stats {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.stat {
    text-align: center;
}

.number {
    font-weight: bold;
    display: block;
}

.label {
    color: #888;
    font-size: 12px;
}

.actions {
    display: flex;
    justify-content: space-around;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.connected {
    background-color: #6c63ff;
    color: #fff;
}

.message {
    background-color: #e0e0e0;
    color: #000;
}
</style>