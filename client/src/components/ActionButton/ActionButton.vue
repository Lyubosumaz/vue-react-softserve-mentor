<template>
  <div :class="animation ? ['action-button-wrapper', 'active'] : 'action-button-wrapper'">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <button class="action-button" :type="type">{{value}}</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { titleFromName } from '@/global/strings'

@Options({
  props: {
    type: String,
    value: String,
    animation: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    titleFromName,
  },
})
export default class ActionButton extends Vue {}
</script>

<style scoped lang="scss">
$primary-color: #03e9f4;
$border-width: 0.1em;
$hover-transition: 0.5s;;

@mixin set-animation($position) {
  @if $position == 'top' {
    top: 0;
    left: -100%;
    width: 100%;
    height: $border-width;
  } @else if $position == 'right' {
    top: -100%;
    right: 0;
    width: $border-width;
    height: 100%;
  } @else if $position == 'bottom' {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: $border-width;
  } @else if $position == 'left' {
    bottom: -100%;
    left: 0;
    width: $border-width;
    height: 100%;
  }
}

@mixin btn-animation($position) {
  @keyframes btn-anim-#{$position} {
    0% {
      #{$position}: -100%;
    }
    50%,100% {
      #{$position}: 100%;
    }
  }
  animation: btn-anim-#{$position} 1s linear infinite;
}

@mixin gradient-animation($position, $direction, $delay) {
  position: absolute;
  display: block;
  @include btn-animation($position);
  animation-delay: $delay;
  background: linear-gradient($direction, transparent, $primary-color);
}

.action-button-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: $hover-transition;

  .action-button {
    padding: 0.5em 1em;
    border: $border-width solid transparent;
    background: transparent;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 1em;
    color: $primary-color;
    transition: $hover-transition;

    &:hover {
      color: #fff;
    }
  }

  &:hover {
    background: $primary-color;
    border-radius: 0.5em;
    box-shadow:
      0 0 0.25em $primary-color,
      0 0 0.5em $primary-color,
      0 0 0.75em $primary-color,
      0 0 1em $primary-color;
  }
}

.active {
  span:nth-child(1) {
    @include set-animation(top);
    @include gradient-animation(left, 90deg, 0.0s);
  }

  span:nth-child(2) {
    @include set-animation(right);
    @include gradient-animation(top, 180deg, .25s);
  }

  span:nth-child(3) {
    @include set-animation(bottom);
    @include gradient-animation(right, 270deg, .5s);
  }

  span:nth-child(4) {
    @include set-animation(left);
    @include gradient-animation(bottom, 360deg, .75s);
  }
}
</style>
