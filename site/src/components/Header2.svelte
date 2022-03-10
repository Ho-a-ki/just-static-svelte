
<script lang="ts">
    import { get } from 'svelte/store'
    import { fade, fly, slide } from "svelte/transition";
    // import { headerVisible } from '../store/nav';

    // import { headerVisible , mobileMenuVisible } from '../store/nav.js'
    // $ : mobileMenuVisible
    let mobileMenuView :Boolean = false

    let y = 0;
    let offset = 0;
    let lastY = 0;
    let tolerance = 0;
    let headerVisible = true
    $: headerClass = updateClass(y);
    // $: udpateHeaderVisible(y);

    function udpateHeaderVisible(y) {
        let offset = 0;
        const dy = lastY - y;
        lastY = y;
        if (y < offset) {
            headerVisible = false
        }
        
        if (dy < 0) {
            headerVisible = false
        }

        headerVisible = true

        console.log(y)
        return y
    }

    function updateClass(y) {
        const dy = lastY - y;
        lastY = y;
        return deriveClass(y, dy);
    }

    function deriveClass(y, dy) {
    if (y < offset) {
        headerVisible = false
    }

    if (Math.abs(dy) <= tolerance) {
        return headerClass;
    }

    if (dy < 0) {
        headerVisible = false
        return "";
    }
    
    headerVisible = true
    return "";
    }
    
</script>


<svelte:window bind:scrollY={y} />

<div>
    <div class="notice">
        <div class="title">택배 파업 안내
            <span>더보기</span>
        </div>
        <div class="content">택배 파업 안내 : 현재 한진 택배 일부지역 파업으로 인해 배송이 지연되거나 반송될 수 있습니다.</div>
    </div>
    
    {#if mobileMenuView}
    <div class="mobile-menu">
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Meet the team</li>
        </ul>
    </div>
    {/if}
</div>

{#if headerVisible}
<header transition:fly="{{ y: -50, duration: 400 }}">
    <div id="logo">
        <a href="/#">
            <img src="images/top-logo.svg" alt="" />
        </a>
    </div>
    <div class="menu-bar">menu</div>
</header>
{/if}


<style lang='scss'>
    $header--size: 150px;
    $color--white : #FFF;

    img {
        width: 100%;
    }

    .notice {
        display: none;
    }

    header {
        padding: 10px 20px;
        top: 0;
        position: sticky;
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

