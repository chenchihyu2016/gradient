import Vue from 'vue';
import VueRouter from 'vue-router';
import Gradient from '@/views/Gradient.vue';
import Level from '@/views/Level.vue';
// import Letter from '@/views/Letter.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/gradient',
        name: 'Gradient',
        component: Gradient,
        meta: { layout: 'VIndex' },
        props: true,
    },
    {
        path: '/',
        name: 'Level',
        component: Level,
        meta: { layout: 'VIndex' }
    },
    // {
    //     path: '/letter',
    //     name: 'Letter',
    //     component: Letter,
    //     meta: { layout: 'VLetter' }
    // },
];

const router = new VueRouter({
    routes
});

export default router;
