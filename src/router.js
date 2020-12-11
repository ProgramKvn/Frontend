import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "@/views/Inicio"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () => import('./views/Signin.vue')
    },
    {
        path: '/configuracion/:id',
        name: 'Configuracion',
        component: () => import('./views/Configuracion.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/contacto/:id',
        name: 'Contacto',
        component: () => import('./views/Contacto.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/mis_mensajes/:autor',
        name: 'Mis_Mensajes',
        component: () => import('./views/Mis_Mensajes.vue'),
        meta: {
            requiresAuth: true
        }
    },{
        path: "/header",
        name: "header",
        component: () => import("./components/Header.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/contenidohtml/:id",
        name: "contenidohtml",
        component: () => import("./views/ContenidoHTML.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/topicscss",
        name: "topiccss",
        component: () => import("./components/TopicCSS.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/contenidocss/:id",
        name: "contenidocss",
        component: () => import("./views/ContenidoCSS.vue"),
        meta: {
          requiresAuth: true,
        },
      },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;