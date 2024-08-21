<template>
  <div class="dashboard-container">
        <!-- Left Sidebar -->
        <div class="sidebar">
            <div class="card about">
                <h3>About</h3>
                <p><img src="/src/assets/imagesRiwi/perfil.png" alt="user" class="img-icons" /><strong>Full Name:</strong> John Doe</p>
                <p><img src="/src/assets/imagesRiwi/check.png" alt="user" class="img-icons" /><strong>Status:</strong> active</p>
                <p><img src="/src/assets/imagesRiwi/crown.png" alt="user" class="img-icons" /><strong>Role:</strong> Developer</p>
                <p><img src="/src/assets/imagesRiwi/flag.png" alt="user" class="img-icons" /><strong>Country:</strong> COL</p>
                <p><img src="/src/assets/imagesRiwi/translate.png" alt="user" class="img-icons" /><strong>Language:</strong> English</p>
                <h3>Contacts</h3>
                <p><img src="/src/assets/imagesRiwi/tel.png" alt="user" class="img-icons" /><strong>Contact:</strong> (123) 456-7890</p>
                <p><img src="/src/assets/imagesRiwi/device.png" alt="user" class="img-icons" /><strong>Skype:</strong> john.doe</p>
                <p><img src="/src/assets/imagesRiwi/perfil.png" alt="user" class="img-icons" /><strong>Email:</strong> john.doe@example.com</p>
                <h3>Teams</h3>
                <p>Backend Developer (126 Members)</p>
                <p>VueJS Developer (98 Members)</p>
            </div>
            <div class="card overview">
                <h3>Overview</h3>
                <p><strong>Task Compiled:</strong> 13.5k</p>
                <p><strong>Connections:</strong> 897</p>
                <p><strong>Projects Compiled:</strong> 146</p>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
            <div class="card activity-timeline">
                <h3>Activity Timeline</h3>
                <ul>
                    <li>
                        <span class="time">12 min ago</span>
                        <p>12 Invoices have been paid <a href="#">Invoice.pdf</a></p>
                    </li>
                    <li>
                        <span class="time">45 min ago</span>
                        <p>Client Meeting with John @10:15am <br> Lester McCarthy (Client) <br> CEO of Pokynet</p>
                    </li>
                    <li>
                        <span class="time">2 Day Ago</span>
                        <p>Create a new project for client <br> 6 team members in a project</p>
                    </li>
                </ul>
            </div>

            <div class="grid-section">
                <div class="card connection f-15">
                    <h3>Connection</h3>
                    <ul >
                        <li class="f-10"><img class="img-profile"src="/src/assets/imagesRiwi/perfilpng.png" alt="" srcset="">Cecilia Payne <br>  456 Connections </li>
                        <li class="f-10"><img class="img-profile"src="/src/assets/imagesRiwi/perfilpng.png" alt="" srcset="">Curtis Fletcher <br>  1.32k Connections </li>
                        <li class="f-10"><img class="img-profile"src="/src/assets/imagesRiwi/perfilpng.png" alt="" srcset="">Alice Stone <br>  125 Connections</li>
                        <li class="f-10"><img class="img-profile"src="/src/assets/imagesRiwi/perfilpng.png" alt="" srcset="">Darrell Barnes <br>  456 Connections</li>
                        <li class="f-10"><img class="img-profile"src="/src/assets/imagesRiwi/perfilpng.png" alt="" srcset="">Eugenia Moore <br>  1.2k Connections</li>
                    </ul>
                    <a href="#">View all connections</a>
                </div>
                <div class="card teams">
                    <h3>Teams</h3>
                    <ul>
                        <li>React Developers - 72 Members</li>
                        <li>Support Team - 122 Members</li>
                        <li>UI Designer - 7 Members</li>
                        <li>VueJS Developers - 289 Members</li>
                        <li>Digital Marketing - 24 Members</li>
                    </ul>
                    <a href="#">View all Teams</a>
                </div>
            </div>

            <div class="card project-list">
                <h3>Project List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Leader</th>
                            <th>Team</th>
                            <th>Progress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BGC eCommerce App</td>
                            <td>Eileen</td>
                            <td>React Project</td>
                            <td>78%</td>
                            <td><button>⋮</button></td>
                        </tr>
                        <tr>
                            <td>Falcon Logo Design</td>
                            <td>Owen</td>
                            <td>Figma Project</td>
                            <td>25%</td>
                            <td><button>⋮</button></td>
                        </tr>
                        <!-- Add more rows as necessary -->
                    </tbody>
                </table>
                <div class="pagination">
                    <span>Showing 1 to 5 of 7 entries</span>
                    <div class="page-controls">
                        <button>&lt;</button>
                        <button class="active">1</button>
                        <button>2</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.dashboard-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    
   
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 3fr;
    }
}

.sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}

.card {
    margin-top: 30px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 5px 5px 10px rgb(191, 176, 176);
    
   
}

.about h3, .overview h3, .activity-timeline h3, .connection h3, .teams h3, .project-list h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 600;
}
.card  a {
    text-decoration: none;

}
.card p{
    margin-bottom: 10px;
    color:#6b7280;
}
.card p img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
.activity-timeline ul, .connection ul, .teams ul {
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 12px;
        font-size: 0.875rem;
    }

    .time {
        font-size: 0.75rem;
        color: #6b7280;
    }
}

.grid-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
}

.project-list table {
    width: 100%;
    border-collapse: collapse;

    th, td {
        padding: 10px;
        text-align: left;
        font-size: 0.875rem;
    }

    th {
        background-color: #f3f4f6;
    }

    tbody tr:nth-child(even) {
        background-color: #f9fafb;
    }

    button {
        background: none;
        border: none;
        color: #6b7280;
        font-size: 1.25rem;
        cursor: pointer;
    }
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    .page-controls {
        display: flex;
        gap: 10px;

        button {
            background-color: #f3f4f6;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;

            &.active {
                background-color: #3b82f6;
                color: #fff;
            }
        }
    }
}
.img-profile{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}
.connection li{
    display: flex;
    align-items: center;
    
}
.btn{
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #6b7280;

    cursor: pointer;
    margin-left: 55%;
}
.img-icons{
    width: 20px;
    height: 20px;
   

}
.teams li{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>