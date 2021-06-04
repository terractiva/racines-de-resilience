<script>
  import actions from '../helpers/actions';

  /** @type boolean */
  export let isDragging;
</script>

<style lang="scss">
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;

    li {
      border-radius: 50%;
      cursor: pointer;
      list-style: none;
      overflow: hidden;
      position: absolute;

      &:hover {
        background: rgba(250, 250, 250, 0.9);
      }
      
      &::before {
        content: '';
        display: block;
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
        user-select: none;
        width: 100%;
      }
    }
  }
</style>

<ul>
  {#each actions as action}
    <li
      style="
        left: {action.position[0]}%;
        top: {action.position[1]}%;
        width: {2 * action.rayon}%;
      "
      on:mouseup={() => {
        if (!isDragging) {
          alert(`TODO: Ouvrir "${action.texte.split('\n').join(' ')}"`);
        }
      }}
    >
      <p>{action.texte}</p>
    </li>
  {/each}
</ul>
