<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.resizeTo(500, 1100);
  window.moveTo(1600, 0);
  // console.log('Resized(?)');
});

function openWindow(type) {
    const strWindowFeatures = 'location=yes,height=1110,width=500,top=0,left=1600,scrollbars=yes,status=yes';

    const URL = type === 'self' ? '/' : `https://translate.google.com/?sl=en&tl=uk&text=apple%0A&op=translate`;

    const re = open(URL, '_blank', strWindowFeatures);
    // const re = open(URL, '_blank');
    console.log(re);
   
    if(re && type === 'self') {
        close();
    }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <h1 class="green">Here we go!!!</h1>
    <h3>
      You’ve successfully created a PWA project!
    </h3>

    <p class="tab" @click="openWindow('google')">google 3</p>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
