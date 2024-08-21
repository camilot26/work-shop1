<template> 
<div class="dashboard">
        <!-- Project Card 1 -->
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <h3>Social Banners</h3>
                    <p>Client: Christian Jimenez</p>
                </div>
                <div class="card-options">⋮</div>
            </div>
            <div class="card-body">
                <p class="budget">$24.8k / $18.2k <span>Total Budget</span></p>
                <p class="dates">Start Date: 14/2/21<br>Deadline: 28/2/22</p>
                <p class="description">We are combining Software Development and Web Development Services.</p>
                <div class="progress-container">
                    <p>All Hours: 380/244</p>
                    <p>Task: 290/344</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: 95%;"></div>
                    </div>
                    <p class="progress-info">28 Days left</p>
                </div>
            </div>
            <div class="card-footer">
                <div class="members">
                    <img src="https://via.placeholder.com/24" alt="Member 1">
                    <img src="https://via.placeholder.com/24" alt="Member 2">
                    <img src="https://via.placeholder.com/24" alt="Member 3">
                    <span>280 members</span>
                </div>
                <div class="comments">15</div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <h3>Social Banners</h3>
                    <p>Client: Christian Jimenez</p>
                </div>
                <div class="card-options">⋮</div>
            </div>
            <div class="card-body">
                <p class="budget">$24.8k / $18.2k <span>Total Budget</span></p>
                <p class="dates">Start Date: 14/2/21<br>Deadline: 28/2/22</p>
                <p class="description">We are combining Software Development and Web Development Services.</p>
                <div class="progress-container">
                    <p>All Hours: 380/244</p>
                    <p>Task: 290/344</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: 95%;"></div>
                    </div>
                    <p class="progress-info">28 Days left</p>
                </div>
            </div>
            <div class="card-footer">
                <div class="members">
                    <img src="https://via.placeholder.com/24" alt="Member 1">
                    <img src="https://via.placeholder.com/24" alt="Member 2">
                    <img src="https://via.placeholder.com/24" alt="Member 3">
                    <span>280 members</span>
                </div>
                <div class="comments">15</div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <h3>Social Banners</h3>
                    <p>Client: Christian Jimenez</p>
                </div>
                <div class="card-options">⋮</div>
            </div>
            <div class="card-body">
                <p class="budget">$24.8k / $18.2k <span>Total Budget</span></p>
                <p class="dates">Start Date: 14/2/21<br>Deadline: 28/2/22</p>
                <p class="description">We are combining Software Development and Web Development Services.</p>
                <div class="progress-container">
                    <p>All Hours: 380/244</p>
                    <p>Task: 290/344</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: 95%;"></div>
                    </div>
                    <p class="progress-info">28 Days left</p>
                </div>
            </div>
            <div class="card-footer">
                <div class="members">
                    <img src="https://via.placeholder.com/24" alt="Member 1">
                    <img src="https://via.placeholder.com/24" alt="Member 2">
                    <img src="https://via.placeholder.com/24" alt="Member 3">
                    <span>280 members</span>
                </div>
                <div class="comments">15</div>
            </div>
        </div>
        <!-- Duplicate the card for more projects as needed -->
    </div>

</template>
<style lang="scss" scoped>

.dashboard {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-right: 60px;
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(191, 176, 176);
    padding: 20px;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 4px 50px rgba(0, 0, 0, 0.15);
    }

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card-title {
            h3 {
                font-size: 1.125rem;
                font-weight: 600;
            }

            p {
                font-size: 0.875rem;
                color: #6b7280;
            }
        }

        .card-options {
            color: #6b7280;
            cursor: pointer;
        }
    }

    &-body {
        margin-top: 16px;

        .budget {
            font-size: 1.25rem;
            font-weight: 600;

            span {
                display: block;
                font-size: 0.875rem;
                color: #6b7280;
            }
        }

        .dates {
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 8px;
        }

        .description {
            margin-top: 12px;
            font-size: 0.875rem;
            color: #6b7280;
        }

        .progress-container {
            margin-top: 12px;

            p {
                font-size: 0.875rem;
                color: #6b7280;

                &.progress-info {
                    color: #10b981;
                    font-weight: 600;
                }
            }

            .progress-bar {
                height: 6px;
                border-radius: 9999px;
                background-color: #e5e7eb;
                margin-top: 4px;
                position: relative;

                .progress {
                    height: 100%;
                    border-radius: 9999px;
                    background-color: #3b82f6;
                }
            }
        }
    }

    &-footer {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .members {
            display: flex;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
                border-radius: 9999px;
                margin-right: 4px;
            }

            span {
                font-size: 0.875rem;
                color: #6b7280;
                margin-left: 8px;
            }
        }

        .comments {
            font-size: 0.875rem;
            color: #6b7280;
        }
    }
}

</style>