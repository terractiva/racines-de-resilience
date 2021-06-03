<script>
  import actions from '../helpers/actions';
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

<ul>
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
