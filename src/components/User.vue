<template>
    <div>
            <h3> Registro Usuarios</h3>
            <hr>
            <h1>{{lengthArrayUsers }}</h1>
            <ul>
                <li v-for="(user, index) in users" :key="index">
                    {{ user.name }}-{{ user.last }} 

                    <b-button variant="danger" 
                    @click="deleteUser(index)"
                    >X</b-button>
                    
                </li>
            </ul>

            <form @submit.prevent="addUser">
                <b-input-group class="pl-5 pr-5">
                <b-form-input type="text" v-model="newUser.name" placeholder="nombre"></b-form-input>
                <b-form-input type="text" v-model="newUser.last" placeholder="apellido"></b-form-input>
                <b-button block  variant="dark" type="submit">Agregar</b-button></b-input-group>
            </form>
    </div>
</template>

<script>

    export default {
        data(){
        return{
            users:[
                {
                    name:"andres",
                    last:"Rueda",
                    contated:false
                },
                {
                    name:"felipe",
                    last:"Rueda",
                    contated:true
                },
            ],
            newUser: {},
        }
    },

    methods:{

        addUser(){
            this.users.push(this.newUser);
            this.newUser={};
            console.log("Agregando usuario")
        },

        deleteUser(index){
            this.users.splice(index,1);

        }

    },

    computed:{
        
        lengthArrayUsers(){ return this.users.length}
      
    },

    mounted(){
        
      console.log("compoentente montued user")
    },

    created(){
    
      console.log("compoentente created user")
    }
        
    }
</script>

<style lang="css" scoped>

    ul{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-decoration:none;
            list-style: none;
    }

     li{
        text-decoration:none;
        width:10%;
        padding:5px 10px;
        background-color:rgb(13, 9, 34);
        border:1px solid rgb(252, 252, 252);
        text-align:center;
        color:#fff;
        border-radius: 10px;
        margin-top: 0.5rem;
        font-weight: bold;
    }


</style>