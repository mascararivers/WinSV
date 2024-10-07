<script>
    import '../scripts/gsap'
</script>

<img src="/background-1.jpg" class="w-screen h-screen absolute" alt="" id="login-background">
<div class="flex flex-col justify-center items-center z-10 w-screen h-screen absolute gap-10">
    <div class="w-64 h-64 bg-zinc-400 opacity-70 rounded-full flex flex-col gap-2 justify-center items-center border-4" id="user-field">
        <img src="/user.png" alt="" class="w-32 h-32">
        <input type="text" placeholder="Username" class="h-8 w-32 rounded-md text-center bg-zinc-600 placeholder-white text-white">
    </div>
    <button class="w-64 h-12 rounded-md bg-white opacity-50 text-xl hover:scale-110 duration-200" id="enter-btn">Enter</button>
</div>

<style>
    :root {
        background-color: black;
    }
</style>
