<template>

    <div id="wrapper">

        <cms-nav></cms-nav>
        <!-- main view -->
        <router-view
                class="view"
                keep-alive
                >
        </router-view>
    </div>
</template>


<script>
    // navigation
    import Nav from '../widgets/nav/Nav.vue'

    export default {
        data() {},
        components:{
            "cms-nav": Nav
        }

    }


</script>
