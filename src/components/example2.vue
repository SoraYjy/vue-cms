<template>
    <div  id="ContainerTable" class="container">

        <div class="panel panel-default">
            <div class="panel-heading">Vue Example1</div>
            <div class="panel-body">
                <div id="exampleVM2">
                    <input v-model="newTodo" v-on:keyup.enter="addTodo">
                    <ul>
                        <li v-for="todo in todos">
                            <span>{{ todo.text }}</span>
                            <button v-on:click="removeTodo($index)">X</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    // Model
    var exampleData2 = {
        newTodo: '',
        todos: [
            { text: 'Add some todos' }
        ],
    }

    /*    var exampleVM2 = new Vue({
     el: '#exampleVM2',
     data: exampleData2,
     methods: {
     addTodo: function () {
     var text = this.newTodo.trim()
     if (text) {
     this.todos.push({ text: text })
     this.newTodo = ''
     }
     },
     removeTodo: function (index) {
     this.todos.splice(index, 1)
     }
     }
     })*/

    export default {
        data() {
            return exampleData2;
        },
        methods: {
            addTodo: function () {
                var text = this.newTodo.trim()
                if (text) {
                    this.todos.push({ text: text })
                    this.newTodo = ''
                }
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1)
            }
        }
    }
</script>

<style>
    #exampleVM2 {
        color: red;
    }
    .form-must {
        color: red;
    }
    .form-group .btn {
        padding: 7px 14px;
    }
</style>