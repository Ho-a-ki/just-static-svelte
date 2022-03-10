<script lang="ts">
  import Header from './components/Header.svelte'
  import { onMount } from 'svelte';
  import { fade, fly, slide } from "svelte/transition";

  let mobileMenuView :Boolean = false
  let headerVisible:Boolean = true
  let notice = false
  let noticeContent = false;

  onMount(async () => {
    notice = true
	});
  
  function toggleMobileMenu() {
    mobileMenuView = !mobileMenuView;
    headerVisible = !headerVisible;
  }

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      headerVisible = true
    } else {
      headerVisible = false
      noticeContent = false
    }
    prevScrollpos = currentScrollPos;

    if (currentScrollPos == 0) {
      notice = true
    } else {
      notice = false
    }
  }
  
  function toggleNoticeContent() {
    noticeContent = !noticeContent
  }

</script>

<main>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
  />
  <!-- <Header /> -->

  {#if notice}
  <div id="notice" transition:fly="{{ y: -50, duration: 400 }}" >
    <div class="container2">
      <p>택배 파업 안내</p>
      <span on:click={toggleNoticeContent}>+</span>
    </div>
    {#if noticeContent}
    <div id="noticeContent" transition:slide="{{ duration: 400 }}">
      택배 파업 안내 : 현재 한진 택배 일부지역 파업으로 인해 배송이 지연되거나 반송될 수 있습니다.
    </div>
    {/if}
  </div>
  {/if}
  <div class="wrapper">
    {#if mobileMenuView}
    <div transition:fly="{{ x: -50, duration: 150 }}" class="mobile-menu">
      <nav>
        <ul class="mobile-menu-list">
          <div class="close" on:click="{toggleMobileMenu}">
            <i class="fa fa-times" aria-hidden="true">뭔데</i>
          </div>
          <li><a href="/#">About</a></li>
          <li><a href="/#">Contact</a></li>
          <li><a href="/#">Meet the team</a></li>
          <li><a href="/#">Blog</a></li>
        </ul>
      </nav>
    </div>
    {/if}
    
    {#if headerVisible}
    <header transition:fly="{{ y: -50, duration: 400 }}">
      <div class="container">
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
      </div>
    </header>
    <!-- <nav>
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Meet the team</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav> -->
    {/if}
  </div>
  <div class="content">
  </div>
  <div class="content">
  </div>
</main>


<style lang="scss">
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");
  /* 공통 부분 */
  $color--white: #FFF;
  $color--white-60: rgba($color--white, .6);
  $color--white-50: rgba($color--white, .5);
  $color--white-30: rgba($color--white, .3);
  $color--white-10: rgba($color--white, .1);
  $color--white-5: rgba($color--white, .05);
  
  $color--primary: #2553a0;
  $color--primary-50: rgba($color--primary, 0.5);


  main {
    --main-color: #2553a0;
    --header-size: 120px;
    font-family: Pretendard;
  }

  i {
    font-size: 32px;
  }

  p {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  /* 상단 부분 */
  header {
    height: var(--header-size);
    background: rgb(241, 241, 241);
    position: fixed;
    width: 100%;
  }

  .container {
    height: var(--header-size);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
  }

  .container2 {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
  }

  #logo {
    width: var(--header-size);
  }
  
  .menu-right {
    color: var(--main-color);
  }

  #notice {
    height: 40px;
    background-color: $color--primary;
  }

  #noticeContent {
    position: relative;
    height: 100vh;
    background-color: $color--primary;
    z-index: 100;
  }

/* 상단 공지부분  */

/* 모바일 메뉴 부분 */
  ul.mobile-menu-list {
    padding: 20px;
  }

  .mobile-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: var(--main-color);
    padding: 0;
    z-index: 100;
  }

  nav ul {
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

  /* 내용 부분 */
  div.content {
    padding-top: var(--header-size);
    height: 500px;
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
