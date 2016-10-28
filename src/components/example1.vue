<template>
    <div  id="ContainerTable" class="container">

        <div class="panel panel-default">
            <div class="panel-heading">Vue Example1</div>
            <div class="panel-body">
                <div id="exampleVM1">
                    <div>Hello {{name}}</div>
                    <input type="text" v-model="name">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    var exampleData1 = {
        name: 'Vue.js'
    }

    /*    // 创建一个 Vue 实例或 "exampleVM"
     // 它连接 View 与 Model
     var exampleVM1 = new Vue({
     el: '#exampleVM1',
     data: exampleData1
     })*/

    //    var exampleVM1 = Vue.extend(){
    //        data: exampleData1
    //    }

    /*    module.exports = {
     data: function() {
     return exampleData1;
     }
     }*/


    export default {
        data() {
            return exampleData1;
        }
    }

</script>

<style>
    #exampleVM1 {
        color: blue;
    }
</style>

