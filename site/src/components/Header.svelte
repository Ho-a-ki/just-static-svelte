
<script lang="ts">
import { fade, fly, slide } from "svelte/transition";
let mobileMenuView :Boolean = false
let headerView = true
let duration = 200
let y = 0
let fixed = false;

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  headerView = true
} else {
  headerView = false
}
prevScrollpos = currentScrollPos;
}

function toggleMobileMenu() {
    mobileMenuView = !mobileMenuView;
    headerView = !headerView;
}

$: y = function () {
  console.log(y)
}

</script>


<!-- {#if notice}
<div id="notice" transition:fly="{{ y: -50, duration: 400 }}" >
  <div class="container2">
    <p>택배 파업 안내</p>
    <button on:click={toggleNoticeContent}>+</button>
  </div>
  {#if noticeContent}
  <div id="noticeContent">
    택배 파업 안내 : 현재 한진 택배 일부지역 파업으로 인해 배송이 지연되거나 반송될 수 있습니다.
  </div>
  {/if}
</div>
{/if} -->

<svelte:window bind:scrollY={y} />

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

{#if headerView}
<header class:fixed={fixed} transition:fly="{{ y: -50, duration }}">
  <nav class="header-left">
    <ul>
      <li><a href="/#">브랜드</a></li> |
      <li><a href="/#">제품 철학</a></li> |
      <li><a href="/#">스토어</a></li>
    </ul>
  </nav>
  <div id="logo">
      <a href="/#">
          <img src="images/top-logo.svg" alt="" />
      </a>
  </div>
  <nav class="header-right">
    <ul>
      <li><a href="/#">직업</a></li> |
      <li><a href="/#">제품 찾기</a></li> |
      <li><a href="/#">허브 백과사전</a></li>
    </ul>
  </nav>
  <div class="menu-bar">menu</div>
</header>
{/if}



<style lang='scss'>
$header--size: 120px;

img {
    width: 100%;
}

header {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header--size;
    background-color: $color--white;
    div {
        width: $header--size;
        text-align: center;
    }
    nav {
      display: none;
    }
}

@media screen and (min-width: 700px) {
  header {
    position: fixed;
    height: 150px;
    justify-content: center;
    .menu-bar {
      display: none;
    }
    #logo {
      width: 200px;
    }
    nav {
      font-family: "Pretendard";
      display: block;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li {
          padding: 0 40px;
          &:hover::after {
          content: '';
          left: 10%;
          top: 100%;
          position: absolute;
          width: 75%;
          height: 3px;
          background-color: #2553a0;
          }
          a {
            color: black;
          }
        }
      }
    }
  }
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }
}

</style>

