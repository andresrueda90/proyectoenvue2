<template>
    <div>
        <h1>Aqui van los superherores</h1>
    </div>
</template>

<script>
    export default {
        name:"ListSuperHero",

        created(){
            
            this.$store.dispatch('listsuperhero/getSuperHerobyId', {
                id: this.$route.params.id
            })



        },

        
    }
</script>

<style lang="css" scoped>

</style>