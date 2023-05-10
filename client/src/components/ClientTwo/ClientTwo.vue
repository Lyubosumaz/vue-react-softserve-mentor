<template>
  <iframe
    title="react-client-two"
    :src="iframeRoute"
    width="100%"
    height="100%"
    frameborder="0"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    iframeRoute: String,
  },
})
export default class ClientTwo extends Vue {
  iframeRoute!: string
}
</script>
