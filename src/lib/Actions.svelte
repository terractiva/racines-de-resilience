<script>
  import actions from '../helpers/actions';
</script>

<style lang="scss">
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      list-style: none;
      position: absolute;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }
  }
</style>

<ul>
  {#each actions as action}
    <li style="
      left: {action.position[0]}%;
      top: {action.position[1]}%;
      width: {2 * action.rayon}%;
    ">
      {action.texte}
    </li>
  {/each}
</ul>
