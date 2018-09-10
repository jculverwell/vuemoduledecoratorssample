<template>
  <div class="home">
      <h1>Version:{{this.$store.state.version}}</h1>
      <h1>Count: {{count}}</h1>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store/store';

import {getModule} from 'vuex-module-decorators'
import CounterModule from '@/store/Counter2'


@Component
export default class Home extends Vue {

 get count() {
    return CounterModule.count
  }

increment(){
   CounterModule.incr();
}

decrement(){
  CounterModule.decr();
}

}
</script>
