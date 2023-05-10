<template>
  <section class="footer">
    <p className="copy-write">
      Lyubosumaz Vue React SoftServe Project. Copyright {{neededYear}} All Rights Reserved
    </p>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Footer extends Vue {
  get currentYear() {
    return new Date().getFullYear()
  }

  get neededYear() {
    return this.currentYear !== 2023 ? `2023-${this.currentYear}` : '2023'
  }
}
</script>

<style scoped lang="scss">
.footer {
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.1em solid #4f66ab;
  font-size: 0.75em;
  color: #fff;
}
</style>
