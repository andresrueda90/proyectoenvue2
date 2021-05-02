<template>
    <div>
        <h1>{{ $route.params.id }}</h1>

        <div class="accordion" role="tablist" v-for="(comment,index) in comments" :key="index">
            <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle="'accordion-' + comment.id" variant="info" class="p-1 button-comment">Commentario {{index+1}}  </b-button>
            </b-card-header>
            <b-collapse :id="comentaTex+comment.id" visible accordion="my-accordion" role="tabpanel">
                <b-card-body class="body-comment">
                <b-card-text>{{ comment.body }} <br> Autor: {{comment.email}} </b-card-text>
                </b-card-body>
            </b-collapse>
            </b-card>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comments',

        data() {
            return {
                  comentaTex:"accordion-"   
            }
        },
        methods: {

        },
        computed:{
            comments(){
                return  this.$store.state.comments;
            }
        },

        mounted (){
            this.$store.dispatch('getComments', {
                idComments: this.$route.params.id
            })
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

</style>