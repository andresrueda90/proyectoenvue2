<template>
    <div>
    <h1>Publicaciones</h1><br>
    <b-card-group deck>
        <div v-for="(post,index) in $store.state.listpost.posts" :key="index">
            <b-card
                :title="post.title"
                tag="article"
                style="max-width: 20rem; min-width: 20rem;"
                class="mb-2 ml-3 post"
                
            >
                <img :src="rutaImgCard2(index)" 
                alt=""
                class="mb-3 card-imagen"
                >
                <b-card-text>
                    {{post.body.substring(0,80) + "..."}}
                </b-card-text>
                <b-button variant="primary">                
                    <router-link 
                    :to="armarUrlComments(index)"
                    class="letterWhite"
                    >
                    Leer Comentarios...</router-link>
                </b-button>

            </b-card>
        </div>
    </b-card-group>
    <router-view />
    </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
        rutaImgCard2(index){
            return  "https://picsum.photos/200/200/?image=" + index  ;
        },
        armarUrlComments(index){
            return  "/comments/" + index  ;
        },
    },
    computed:{

    },

    mounted (){
        this.$store.dispatch('listpost/getPosts')
    }
  }
</script>

<style scoped>

.letterWhite{
    color:white;
}

.post{
    -webkit-box-shadow: -1px -1px 14px -3px rgba(245,242,245,1);
    -moz-box-shadow: -1px -1px 14px -3px rgba(245,242,245,1);
    box-shadow: -1px -1px 14px -3px rgba(245,242,245,1);
    background-color: #16101A;
}

.card-imagen{
    border-radius: 15px;
}

</style>