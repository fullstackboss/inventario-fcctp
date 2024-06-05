<script setup>
    const props=defineProps({
        vtitulo:{
            type: String,
            required:true,
        },vsubtitulo:{
            type: String,
            required:true,
        }
    })
</script>

<template>
      <h2>{{ vtitulo }}</h2>
      <p>{{ vsubtitulo }}</p>
</template>

<style lang="scss" scoped>

</style>