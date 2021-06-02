<script>
  /** @type number */
  export let paddingX;
  /** @type number */
  export let paddingY;
</script>

<style lang="scss">
  div {
    box-sizing: border-box;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>

<div style="padding: {paddingY}px {paddingX}px;">
  <slot></slot>
</div>
