<template>
    <div>
        <div class="thumb-wrap">
            <iframe  :src="films.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> 
    </div> 
</template>

<script>
    export default {
        props: {
            films: {
                type: Array,
            }
        }
    }
</script>

<style scoped>
.thumb-wrap iframe {
    width: 1200px;
    height: 600px;
}

@media screen and (max-width: 1250px) {
  .thumb-wrap iframe {
    width: 1000px;
    height: 500px;
  }
}

@media screen and (max-width: 1050px) {
  .thumb-wrap iframe {
    width: 600px;
    height: 300px;
  }
}
@media screen and (max-width: 660px) {
  .thumb-wrap iframe {
    width: 350px;
    height: 250px;
  }
}
</style>