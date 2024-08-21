import Connections from "@/components/subcomponents/Connections.vue"
import Profile from "@/components/subcomponents/Profile.vue"
import Team from "@/components/subcomponents/Team.vue"
import Projects from "@/components/subcomponents/Projects.vue"

import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {path:"/Profile",
    name:"Profle",
    component:Profile

    },
    {path:"/Team",
    name:"Team",
    component:Team
    },
    {path:"/Projects",
    name:"Projects",
    component:Projects
    },
    {path:"/Connections",
    name:"Connections",
    component:Connections
    }
   
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})  
export default router;