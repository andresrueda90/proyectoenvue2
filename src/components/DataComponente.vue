<template>
    <div>
        <h3> 👉 {{ msg1 }}</h3>
        <h3> 👌 {{ titlepersonalizado }}</h3>
        <h3> ✌ {{ contatenarNombre }}</h3>
        <hr>
        <b-input-group class="pl-5 pr-5">
            <b-form-input type="text" v-model="msjInput" placeholder="Escribir mensaje para Alerta"></b-form-input>
            <b-button variant="dark" @click="mostarAlerta(msjInput)">Mostrar mensaje</b-button>
        </b-input-group>

    </div>
    
</template>

<script>


export default {
    name: 'DataComponente',
    data(){
        return{
            titlepersonalizado:" Esto es un valor ramdom",
            variableComputada:" Esto es una variable computada",
            msjInput:""
        }
    },

    props: {
        msg1: {
            type: String,
            default:"mensaje por defecto",
        }
    },

    methods:{
        mostarAlerta(parametro){
            alert(parametro);
            this.msjInput="";
        }
    },

    computed:{
        contatenarNombre(){
            return  " Computada: " + this.variableComputada ;
        }
    }


}


</script>

<style scoped>

</style>
