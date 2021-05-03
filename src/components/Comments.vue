<template>
    <div>
        <img :src="rutaImgCard2($route.params.id)" 
            alt=""
            class="mb-3 card-imagen"
        >
        <h3>{{ $store.state.listpost.posts[$route.params.id].title  }} #  {{$route.params.id}}</h3>
        <br>

        <div v-show="true">
            <div class="accordion" role="tablist" 
            v-for="(comment,index) in comments" 
            :key="index">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" 
                    class="p-1" 
                    role="tab"
                    >
                        <b-button block v-b-toggle="'accordion-' + comment.id" 
                        variant="info" 
                        class="p-1 button-comment"
                        >Autor: {{comment.email}} </b-button>
                    </b-card-header>

                    <b-collapse :id="comentaTex+comment.id" 
                    visible accordion="my-accordion" 
                    role="tabpanel">
                        <b-card-body class="body-comment">
                            <b-card-text>{{ comment.body }} </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Comments',

        data() {
            return {
                  comentaTex:"accordion-",
            }
        },
        methods: {
            rutaImgCard2(index){
                return  "https://picsum.photos/300/200/?image=" + index  ;
            },

            recargarListPost(){
                if(this.$store.state.listpost.posts.length == 0){
                    this.$router.push("/list-post"); //redirecciona si se ha consultado la lista de post
                }
            }
        },
        computed:{
            comments(){
                return  this.$store.state.comentarios.comments;
            }
        },

        created(){
            this.$store.state.comentarios.comments=[];
            
            this.$store.dispatch('comentarios/getComments', {
                idComments: this.$route.params.id
            })

            this.recargarListPost();

        },

        mounted(){
          
        }
    }



</script>

<style lang="css" scoped>

.body-comment{
    background-color: #2a262d;;
}

.button-comment{
   background: rgb(29,23,33);
background: linear-gradient(90deg, rgba(29,23,33,1) 0%, rgba(32,22,40,1) 35%, rgba(29,23,33,1) 100%);
}

.card-imagen{
    border-radius: 15px;
}

</style>