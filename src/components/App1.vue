<template>
    <!-- main view -->
    <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in">
    </router-view>
    <a v-link="{path: '/example1'}">go to example1</a>
    <a v-link="{path: '/example2'}">go to example2</a>
</template>

