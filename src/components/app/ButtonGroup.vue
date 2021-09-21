<template>
    <a
        class="waves-effect waves-light btn amber darken-4"
        @click="$emit('create-field', option)"
    >{{ option }}</a>
</template>

<script>
export default {
  props: ['option']
}
</script>