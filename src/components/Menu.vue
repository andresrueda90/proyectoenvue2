<template>
    <div>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link :to="{name:'hola-mundo'}">Hola Mundo</router-link></li>
            <li><router-link to="/user">User</router-link></li>
            <li><router-link to="/list-post">Listado Post</router-link></li>
            <li><router-link to="/superhero">Super Héroe</router-link></li>
        </ul>
    </nav>
    </div>
</template>

<script>
    export default {
         name: 'Menu',
            data() {
                return {

                }
            }
    }
</script>

<style lang="css" scoped>
    nav a{
            text-decoration:none;
            color:inherit;
            font-size:20px;
        }

    nav li{
        display:inline-block;
        width:10%;
        padding:5px 10px;
        background-color:rgb(13, 9, 34);
        border:1px solid rgb(252, 252, 252);
        text-align:center;
        color:#fff;
        border-radius: 10px;
        margin-inline-end: 10px;
        font-weight: bold;
    }
    nav li:hover{
        background-color:#fff;
        color:#000;
    }

</style>