<template>
    <div>
        <h2>Data componente {{ msg1 }}</h2>
        <h3> {{ titlepersonalizado }}</h3>
        <h3> {{ contatenarNombre }}</h3>
        <hr>
        <input type="text" v-model="msjInput" >
        <button @click="mostarAlerta(msjInput)">Mostrar mensaje</button>

    </div>
    
</template>

<script>


export default {
    name: 'DataComponente',
    data(){
        return{
            titlepersonalizado:"Esto es un valor ramdom",
            variableComputada:"Esto es una variable computada",
            msjInput:""
        }
    },

    props: {
        msg1: {
            type: String,
            default:"mensaje por defecto",
            required:true,
        }
    },

    methods:{
        mostarAlerta(parametro){
            alert(parametro);
        }
    },

    computed:{
        contatenarNombre(){
            return  " NOMBRE DE COMPONENTE:" + this.variableComputada ;
        }
    }


}


</script>

<style scoped>

</style>
