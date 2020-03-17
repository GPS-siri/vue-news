<template>
  <div>
    <h>Title : {{ itemInfo.title }}</h>
    <div> by {{ itemInfo.user }}</div>
    <div> {{ itemInfo.time_ago }}</div>
    <div>Points : {{ itemInfo.points }}</div>
    <p>{{ itemInfo.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.askingitem;
    }
  },
  created() {
    const itemId = this.$route.params.id; 
    this.$store.dispatch('FETCH_ITEM', itemId)    
  }
}
</script>
