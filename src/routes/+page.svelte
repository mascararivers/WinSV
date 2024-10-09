<script>
	import { goto } from '$app/navigation';
    import '../scripts/gsap'
</script>

<img src="/background-1.jpg" class="w-screen h-screen absolute" alt="" id="login-background">
<div class="flex flex-col justify-center items-center z-10 w-screen h-screen absolute gap-10">
    <div class="w-64 h-64 bg-zinc-400 opacity-70 rounded-full flex justify-center items-center" id="user-field">
        <img src="/user.png" alt="" class="w-32 h-32">
    </div>

    <div class="flex flex-col gap-3 justify-center items-center">

        <input type="text" placeholder="Username" class="h-12 w-64 text-xl rounded-md pl-2 bg-black 
        placeholder-white text-white bg-opacity-40 border-b-4 border-neutral-400 hover:backdrop-blur-md
        hover:scale-110 duration-200" id="username-field">

        <input type="password" placeholder="Password" class="h-12 w-64 text-xl rounded-md pl-2 bg-black 
        placeholder-white text-white bg-opacity-40 border-b-4 border-neutral-400 hover:backdrop-blur-md
        hover:scale-110 duration-200" id="password-field">

        <button class="w-32 h-10 rounded-md bg-white opacity-50 text-md 
        hover:scale-110 duration-200" id="enter-btn" on:click={()=>goto('/home')}>Sign in</button>
    </div>

</div>

<style>
    :root {
        background-color: black;
    }
</style>
