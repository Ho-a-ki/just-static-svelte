
<script lang="ts">
    import { fade, fly, slide } from "svelte/transition";
    let mobileMenuView :Boolean = false
    let headerView = true
    let duration = 200
    let y = 0

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
</script>


<svelte:window bind:scrollY={y} />

{#if mobileMenuView}
<div class="mobile-menu">
    <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Meet the team</li>
    </ul>
</div>
{/if}



{#if headerView}
<header transition:fly="{{ y: -50, duration }}">
    <div id="logo">
        <a href="/#">
            <img src="images/top-logo.svg" alt="" />
        </a>
    </div>
    <div class="menu-bar">menu</div>
</header>
{/if}

<style lang='scss'>
    $header--size: 120px;
    $color--white : #FFF;
    $color--primary: #2553a0;

    img {
        width: 100%;
    }


    header {
        width: 100%;
        padding: 10px 20px;
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
    }

</style>

