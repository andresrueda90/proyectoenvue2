<template>
    <div>
        <h1>Aqui van los superherores</h1>
            <form @submit.prevent="searchSuperHero">
                <b-input-group class="pl-5 pr-5">
                    <b-form-input 
                    type="text" 
                    v-model="searchValue" 
                    placeholder="Buscar Super Héroe"
                    >
                    </b-form-input>

                    <b-button block  
                    variant="dark" 
                    type="submit"
                    >Buscar
                    </b-button>

                </b-input-group>
            </form>

            <b-container fluid class="p-4 containerFoto" v-if="infoSuperHeroDataSearched.length == 0">
                
                <p class="title">No hay Datos</p>


            </b-container>
            <b-container fluid class="p-4 containerFoto" v-else>
                
                 <b-card-group deck v-if="infoSuperHeroDataSearched">
                    <div v-for="(superhero,index) in infoSuperHeroDataSearched" :key="index">
                        <b-card
                            :title="superhero.name"
                            tag="article"
                            style="max-width: 20rem; min-width: 20rem;"
                            class="mb-2 ml-3 post"
                            
                        >
                            <img :src="superhero.image.url" 
                            alt=""
                            class="mb-3 card-imagen"
                            >
                            <b-card-text class="letterWhite">
                                <span> intelligence:</span><b-progress :value="powerstats(superhero.powerstats.intelligence)" max="100" height="20px" variant="warning" :striped="striped" show-progress  class="mb-2"></b-progress>
                                <span> strength:</span><b-progress :value="powerstats(superhero.powerstats.strength)" max="100" height="20px" variant="danger" :striped="striped" show-progress  class="mb-2"></b-progress>
                                <span> speed:</span><b-progress :value="powerstats(superhero.powerstats.speed)" max="100" height="20px" variant="secondary" :striped="striped" show-progress  class="mb-2"></b-progress>
                                <span> durability:</span><b-progress :value="powerstats(superhero.powerstats.durability)" max="100" height="20px" variant="success" :striped="striped" show-progress  class="mb-2" ></b-progress>
                                <span> power:</span><b-progress :value="powerstats(superhero.powerstats.power)" max="100" height="20px" variant="primary" :striped="striped" show-progress  class="mb-2"></b-progress>
                                <span> combat:</span><b-progress :value="powerstats(superhero.powerstats.combat)" max="100" height="20px" variant="info" :striped="striped" show-progress  class="mb-2"></b-progress>
                            </b-card-text>
                            
                            <b-button pill variant="secondary">                
                                Ver características
                            </b-button>

                        </b-card>
                    </div>
                </b-card-group>

            </b-container>
    </div>
</template>

<script>
    export default {
        name:"ListSuperHero",
        data(){
            return{
                searchValue:'',
                striped: false,
            }
        },

        methods:{
            searchSuperHero(){
                if(this.searchValue){
                    this.$store.dispatch('listsuperhero/getSuperHerobyName', {
                        name: this.searchValue
                    })
                }
            },

            powerstats(value){
                if(!value){
                    return "20";
                }else{
                    return value;
                }
            }

        },

        computed:{
            infoSuperHeroDataSearched(){
                return  this.$store.state.listsuperhero.superHeroDataSearched;
            }
        },

        created(){
            
            if(this.$route.params.id >0){
                this.$store.dispatch('listsuperhero/getSuperHerobyId', {
                    id: this.$route.params.id
                })
            }

        },

        mounted(){
            

        },


        
    }
</script>

<style lang="css" scoped>

.containerFoto{
    background-color:#231b29;

}

.card-imagen{
    border-radius: 15px;
    height: 20rem;
    width: 17rem;
}

.letterWhite{
    color:white;
}

.post{
    -webkit-box-shadow: -1px -1px 14px -3px rgba(214,30,82,1);
    -moz-box-shadow: -1px -1px 14px -3px rgba(214,30,82,1);
    box-shadow: -1px -1px 14px -3px rgba(214,30,82,1);
    background-color: #16101A;
}


</style>