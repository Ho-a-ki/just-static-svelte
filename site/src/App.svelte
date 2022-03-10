<script lang="ts">
  import Header from './components/Header.svelte'
</script>

<main>
  <Header />
  <div class="content">
  </div>
  <div class="content">
  </div>
</main>


<style lang="scss">
  /* 내용 부분 */
  div.content {
    height: 1000px;
  }


  @media screen and (min-width: 40em) {
    nav ul {
      display: flex;
    }

    nav li {
      flex: 1;
    }
  }

  @media screen and (min-width: 70em) {
    main {
      display: grid;
      grid-template-columns: 3fr 1fr;
      column-gap: 20px;
    }
  }
</style>
