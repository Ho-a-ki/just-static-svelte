<script>
  import { fade } from "svelte/transition";
  let mobileMenuView = true;

  function toggleMobileMenu() {
    mobileMenuView = !mobileMenuView;
  }
</script>

<style>
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");
  main {
    --main-color: #2553a0;
    font-family: Pretendard;
  }

  header {
    height: 114px;
    background: rgb(241, 241, 241);
    padding: 12px 0 12px;
  }

  #logo {
    position: absolute;
    width: 134px;
    left: 20px;
    top: 20px;
  }

  .menu-right {
    position: absolute;
    right: 30px;
    top: 30px;
    text-align: center;
    color: var(--main-color);
  }

  img {
    max-width: 100%;
  }

  #menu {
    position: absolute;
    right: 30px;
    top: 30px;
    text-align: center;
    color: var(--main-color);
  }

  i {
    font-size: 32px;
  }

  .mobile-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: var(--main-color);
    padding: 0;
  }

  ul.mobile-menu-list {
    padding: 20px;
  }

  nav ul {
    /* display: none; */
    list-style: none;
    padding: 0;
  }
  .fa-times {
    color: white;
  }

  nav a:link,
  nav a:visited {
    font-family: "Noto Serif KR", serif;
    text-decoration: none;
    display: block;
    padding: 10px;
    color: rgb(255, 255, 255);
  }

  nav a:hover {
    background-color: rgba(207, 232, 220, 0.7);
  }

  .close {
    text-align: right;
    display: block;
    padding: 20px 0;
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

<main>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
  />
  <div class="wrapper">
    <header>
      <div id="logo">
        <a href="/#">
          <img src="images/top-logo.svg" alt="" />
        </a>
      </div>
      <div id="menu" class="menu-right" on:click="{toggleMobileMenu}">
        <div>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <span>MENU</span>
      </div>
      {#if mobileMenuView}
        <div transition:fade="{{ duration: 150 }}" class="mobile-menu">
          <nav>
            <ul class="mobile-menu-list">
              <div class="close" on:click="{toggleMobileMenu}">
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <li><a href="/#">About</a></li>
              <li><a href="/#">Contact</a></li>
              <li><a href="/#">Meet the team</a></li>
              <li><a href="/#">Blog</a></li>
            </ul>
          </nav>
        </div>
      {/if}
      <!-- <nav>
        <ul>
			  <li><a href="">About</a></li>
			  <li><a href="">Contact</a></li>
			  <li><a href="">Meet the team</a></li>
			  <li><a href="">Blog</a></li>
			</ul>
		  </nav> -->
    </header>
  </div>
</main>
