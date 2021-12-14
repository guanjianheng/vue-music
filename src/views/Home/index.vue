<template>
  <div class="home">
    <MusicListView></MusicListView>
  </div>
</template>

<script>
import MusicListView from './MusicListView.vue';

export default {
  name: 'Home',
  components: {
    MusicListView
  }
}
</script>
