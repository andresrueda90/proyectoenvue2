<template>
    <div class="">
        <h2> 🤞 Hola Mundo {{ $store.state.general.level }}</h2>
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