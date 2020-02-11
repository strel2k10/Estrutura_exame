import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import PersonaApp2 from "../views/PersonaApp2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/paginaUm",
    name: "PaginaUm",
    component: () =>
      import("../views/PaginaUm.vue")
  },
  /* Router dinâmico basiado num personaID (tem de ser importado acima)
  {
    path: "/personas/:personaId",
    name: "PersonaApp2",
    component: PersonaApp2
  },
  */
 /* Router com children
 {
  path: "/actors/:actorId",
  name: "actor-detail",
  component: ActorDetail,
  children: [{
    path: "profile",
    name: "actorDetailProfile",
    component: ActorDetailProfile
  },
  {
    path: "movies",
    name: "actorDetailMovies",
    component: ActorDetailMovies
  }]
},
*/
];

const router = new VueRouter({
  routes
});

export default router;
