import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/pages/index')
    },
	{
	    path: '/Indexs',
	    name: 'Indexs',
	    component: () => import('@/pages/indexs')
	}
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
 
export default router
