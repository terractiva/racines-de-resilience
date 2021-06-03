<script>
  import actions from '../helpers/actions';

  /** @type number */
  export let paddingX;
  /** @type number */
  export let paddingY;
  /** @type string */
  export let transform;
</script>

<style lang="scss">
  ul {
    margin: 0;
    position: relative;
    transform-origin: top left;

    li {
      border-radius: 50%;
      cursor: pointer;
      list-style: none;
      overflow: hidden;
      position: absolute;

      &:hover {
        &::before {
          opacity: 0.1;
        }
      }
      
      &::before {
        background: purple;
        content: '';
        display: block;
        opacity: 0.2;
        padding-bottom: 100%;
      }

      p {
        font-size: 5px;
        left: 0;
        margin: 0;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
      }
    }
  }
</style>

<ul style="
  height: calc(100% - 2 * {paddingY}px);
  padding: {paddingY}px {paddingX}px;
  transform: {transform};
  width: calc(100% - 2 * {paddingX}px);
">
  {#each actions as action}
    <li style="
      left: {action.position[0]}%;
      top: {action.position[1]}%;
      width: {2 * action.rayon}%;
    ">
      <p>{action.texte}</p>
    </li>
  {/each}
</ul>
