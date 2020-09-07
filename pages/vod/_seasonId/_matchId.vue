<template>
  <div class="container">
    <h1 class="title">Vod</h1>
    <p class="params">{{ $route.params }}</p>
    <div class="video-wrapper">
      <iframe 
        id="ytplayer" type="text/html"
        :src="`https://www.youtube.com/embed/dAbBVH8v50Y?autoplay=1&start=${this.start}&fs=0&modestbranding=1`"
        frameborder="0" 
      />
    </div>
    <div class="button-section">
      <button @click="handleGameClick(180)">180</button>
      <button @click="handleGameClick(360)">360</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: 0,
    };
  },

  methods: {
    handleGameClick(time) {
      this.start = time;
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .params {
    font-weight: 300;
    font-size: 24px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .video-wrapper {
    position: relative;
    width: 80%;
    padding-bottom: calc(80vw * 0.5625);
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .links {
    padding-top: 15px;
  }

  button {
    width: 180px;
    height: 36px;
    margin-top: 16px;
    cursor: pointer;
  }
}
</style>
