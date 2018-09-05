<template>
  <div class="home">
      <h1>Version:{{this.$store.state.version}}</h1>
      <h1>Count: {{this.$store.state.counter.count}}</h1>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store/store';

import {getModule} from 'vuex-module-decorators'
import Counter2 from '@/store/Counter2'

const counterModule = getModule(Counter2.prototype)


@Component
export default class Home extends Vue {

increment(){
  counterModule.incr();
}

decrement(){
  counterModule.decr();
}

}
</script>
