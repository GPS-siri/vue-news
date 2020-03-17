<template>
  <div>
    <div>
      <div v-for="item in this.$store.state.news" :key="item.id">
        <a :href="item.url">{{ item.title }}</a>
        <small>
          {{ item.time_ago}} by 
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>
