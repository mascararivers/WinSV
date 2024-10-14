<script>
// @ts-nocheck

	import Chrome from "./windows/Chrome.svelte";

    let showWindow = false
    let shownWindow = ''

    function toggleWindow(window) {
        showWindow = !showWindow
        shownWindow = window
    }
</script>

<div class="w-screen h-10 p-2 bg-black bg-opacity-50 flex flex-row justify-center items-center gap-5 bottom-0 fixed backdrop-blur-md">
    <div class="w-1/2"></div>

    <img src="/icons/vsc.png" alt="">
    <img src="/icons/chrome.png" on:click={()=>toggleWindow('chrome')} alt="">
    <img src="/icons/win11.png" alt="">
    <img src="/icons/spotify.png" alt="">
    <img src="/icons/destiny2.png" alt="">
    
    <div class="w-1/2 flex flex-row items-center justify-end">
        <div class="flex flex-col text-white text-sm items-center justify-center">
            <h1>
                {new Date().getHours()}:{new Date().getMinutes()}
            </h1>
            <h1>
                {new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}
            </h1>
        </div>
    </div>
</div>

{#if showWindow}
<Chrome/>
{/if}

<style>
    img {
        @apply w-6 h-6 hover:scale-110 duration-200
    }
</style>