<script>
	// @ts-nocheck

	import QuickSite from '../chrome/QuickSite.svelte';
	import Draggable from '../Draggable.svelte';
	import WindowBar from './window_bar/WindowBar.svelte';
  
</script>

<Draggable>
	<div>
		<WindowBar />
		<div class="flex flex-row-reverse gap-3 items-center p-4 bg-black">
			<img src="/pfp.png" class="w-10 h-10 rounded-full bg-white" />
			<h1 class="text-white">Images</h1>
			<h1 class="text-white">Gmail</h1>
		</div>
		<div class="w-full h-full bg-black flex flex-col items-center justify-center gap-5">
			<h1 class="text-6xl text-white p-5 font-product-sans">Google</h1>
			<input
				type="text"
				placeholder="Search Google or type a URL"
				class="bg-white placeholder-gray-400
          text-black w-1/2 p-3 rounded-full"
			/>

			<div class="flex flex-row gap-5 justify-center items-center pb-5">
				<QuickSite image_source="/icons/youtube.png" site_name="YouTube"/>
				<QuickSite image_source="/icons/github.jpg" site_name="GitHub" />
				<QuickSite image_source="/icons/paypal.png" site_name="PayPal" />
			</div>
		</div>
	</div>
</Draggable>
