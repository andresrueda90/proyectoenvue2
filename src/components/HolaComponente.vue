<template>
    <div class="">
        <h1>Hola Mundo {{ $store.state.level }}</h1>
        <DataComponente msg1="Mensaje desde el componente padre"/>
    </div>
</template>

<script>

import DataComponente from './DataComponente.vue'

export default {
    name: 'HelloWorld',
    components: {
        DataComponente
    }
}
</script>

<style scoped>

</style>