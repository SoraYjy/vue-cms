import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import Forms from './components/Forms.vue'
import Index from './components/Index.vue'
import example1 from './components/example1.vue'
import example2 from './components/example2.vue'

import nav from './widgets/nav/Nav.vue'

// install router
Vue.use(Router)

// register filters globally


// routing
const router = new Router();

router.map({
    '/index': {
        component: Index
    },
    '/forms': {
        component: Forms
    },
    '/example1': {
        component: example1
    },
    '/example2': {
        component: example2
    }
});

router.redirect({
    '*': '/index'
});

router.beforeEach(function () {
    console.log("before route");
    window.scrollTo(0, 0)
})

router.start(App, '#app')