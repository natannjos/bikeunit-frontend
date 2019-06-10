<template>
  <div>
    <section>
      <hero></hero>
    </section>

    <section>
      <lista-pedais></lista-pedais>
    </section>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import ListaPedais from "~/components/ListaPedais.vue";
export default {
  components: {
    Hero,
    ListaPedais
  }
};
</script>
