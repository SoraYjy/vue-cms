import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import Forms from './components/Forms.vue'
import example1 from './components/example1.vue'
import example2 from './components/example2.vue'

import nav from './widgets/nav/Nav.vue'

// CSS
import './common/bootstrap.css'
import './common/sb-admin.css'
import './common/font-awesome/css/font-awesome.min.css'


// install router
Vue.use(Router)

// register filters globally


// routing
const router = new Router();

router.map({
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
    '*': '/example1'
});

router.beforeEach(function () {
    console.log("before route");
    window.scrollTo(0, 0)
})

router.start(App, '#app')