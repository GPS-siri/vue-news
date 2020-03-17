<template>
  <div>
    <div>
      <div v-for="item in items" :key="item.id">
        <router-link :to="`/item/${item.id}`"> {{ item.title }} </router-link>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      items: state => state.items
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }

}
</script>