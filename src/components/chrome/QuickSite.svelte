<script>
	import PayPal from "./pages/PayPal.svelte";

    export let image_source = ''
    export let site_name = ''

	let showSite = false;
	let shownSite = '';

	// @ts-ignore
	function toggleWindow(site) {
		showSite = !showSite;
		shownSite = site;
	}
</script>

<div class="flex flex-col gap-5 text-white text-md justify-center items-center p-2" on:click={()=>toggleWindow(site_name)}>
    <img class="w-10 h-10 rounded-full" src={image_source} alt="">
    <h1>{site_name}</h1>

    {#if site_name == 'PayPal' && showSite}
        <PayPal/>
    {/if}
</div> 