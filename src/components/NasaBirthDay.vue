<template>
    <div>
        <h3> API Foto NASA</h3>
        <div class="datapikernasa">
            <b-form-datepicker 
            id="example-datepicker"   
            menu-class="w-100"  
            calendar-width="100%"
            placeholder="Buscar Foto en la Fecha..." 
            v-model="fecha"
            :min="fechamin" :max="fechamax" 
            class="mb-2">
            </b-form-datepicker>
            <br>
            <b-container fluid class="p-4 containerFoto" v-if="nasaFotoData!=null">

                <p class="title">{{nasaFotoData.title}}</p>
                <p class="explanation">{{nasaFotoData.explanation}}</p>

                <template v-if="nasaFotoData.media_type=='image'">
                    <img alt="image header"
                    class="image" 
                    :src="nasaFotoData.url" 
                    >
                </template>
                <template v-else-if="nasaFotoData.media_type=='video'">
                    <b-embed
                    type="iframe"
                    aspect="16by9"
                    :src="nasaFotoData.url"
                    ></b-embed>
                </template>
            
            </b-container>
            <b-container fluid class="p-4 containerFoto" v-else>
                <p class="title">No hay Foto para esta fecha</p>
            </b-container>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'NasaBirthDay',

        data() {
            const now = new Date()
            const today = this.formatDate(now)

            return {
                  fecha:today,
                  fechamin:"1996-06-16",
                  fechamax:today
            }
        },

         methods: {

            getNasaFotoData(date){
                if(date){
                    this.$store.dispatch('nasa/getNasaPhoto', {
                            fecha: date
                    })
                }

            },

            formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) 
                    month = '0' + month;
                if (day.length < 2) 
                    day = '0' + day;

                return [year, month, day].join('-');
            }
        },

        computed:{
            nasaFotoData(){
                return  this.$store.state.nasa.nasaFoto;
            }
        },

        watch: {
            fecha: function (value){
                 this.getNasaFotoData(value);
            }
        },

        created(){
            if(!this.$store.state.nasa.nasaFoto){
                this.getNasaFotoData(this.fecha);
            }
        }
    }
</script>

<style lang="css" scoped>

.title{
    font-weight: bold;
    font-size:1.5rem;
}

.explanation{
    font-size:1.1rem;
    text-align: justify;
}

.datapikernasa{
     padding-left: 5rem;
     padding-right: 5rem;

}

.containerFoto{
    background-color:#231b29;
}

.image{
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 20px;
    -webkit-box-shadow: 0px 0px 11px 4px rgba(184,151,184,1);
    -moz-box-shadow: 0px 0px 11px 4px rgba(184,151,184,1);
    box-shadow: 0px 0px 11px 4px rgba(184,151,184,1);
}
</style>