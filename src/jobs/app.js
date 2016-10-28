import Vue from 'vue'; // 引入vue
import Router from 'vue-router'; // 引入vue-router

import example1 from '../components/example1.vue';
import example2 from '../components/example2.vue';

Vue.use(Router);

var a = function(){
    return 111;
}

a().then(function(res) {console.log(res)});

const router = new Router({
    root: 'demo',
    history: true,
    saveScrollPosition: true
});

router.map({
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

router.beforeEath(function (transition){
    console.log("before route");
    return transition.next();
});

let App = vue.extend({
    init() {
        console.log("init app");
    }
});

router.start(App, '#app');
