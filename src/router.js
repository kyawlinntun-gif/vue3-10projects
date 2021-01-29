import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from './pages/Home.vue';
import DcHeros from './pages/DcHeros.vue';
import Calendar from './pages/Calendar.vue';
import MarkDown from './pages/MarkDown.vue';
import Slider from './pages/Slider.vue';
import Calculator from './pages/Calculator.vue';
import ResuableModal from './pages/ResuableModal.vue';
import Chat from './pages/Chat.vue';
import store from './store/index.js';
import UserCrud from './pages/UserCrud.vue';
import TensorFlow from './pages/TensorFlow.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: "/dcheros",
        component: DcHeros,
    },
    {
        path: "/calendar",
        component: Calendar,
    },
    {
        path: '/markdown',
        component: MarkDown
    },
    {
        path: '/slider-caurosel',
        component: Slider
    },
    {
        path: '/calculator',
        component: Calculator,
        meta: { middleware: 'auth' }
    },
    {
        path: '/resuableModal',
        component: ResuableModal
    },
    {
        path: '/chat',
        component: Chat,
        meta: { middleware: 'auth' }
    },
    {
        path: '/user-crud',
        component: UserCrud
    },
    {
        path: '/tensorflow',
        component: TensorFlow
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    // console.log(to.meta.middleware);
    if(to.meta.middleware)
    {
        const middleware = require(`./middleware/${to.meta.middleware}`);
        if(middleware)
        {
            middleware.default(next, store);
        }
        else
        {
            next();
        }
    }
    else
    {
        next();
    }
});

export default router;