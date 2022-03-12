<script>
import { onMount } from 'svelte';
import Main from './components/Main.svelte'
import Footer from './components/Footer.svelte';
import Header from './components/Header.svelte';

  let mobileMenuView = false;
  let headerVisible = true;
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

<!-- <svelte:window bind:scrollY={y} /> -->
<!-- <Flex /> -->
<Header />
<Main />
<Footer/>


<style>
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");

  @media screen and (min-width: 70em) {

  }
</style>
