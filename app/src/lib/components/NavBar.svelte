<script>
    import '../../app.css';
    import { Bell, UserRound, ChevronDown, Search } from '@lucide/svelte';
</script>

<nav class="flex justify-evenly items-center w-full h-20 rounded-full">
    <div class="flex
                items-center
                w-[20%]
                backdrop-blur-2xl
                rounded-full
                "
    >
        <Search class="text-white ml-5"/>
        <input type="text"
               placeholder="Search movies"
               class="
               ml-5
               h-10
               text-white-500
               bg-transparent
               border-none
               focus:outline-none"
        />
    </div>
    <ul class="flex justify-evenly rounded-full">
        <li>Movie</li>
        <li>TV Series</li>
        <li>Animations</li>
        <li>Mistery</li>
    </ul>
    <Bell
          class="
          backdrop-blur-2xl
          p-5
          z-999
          text-white
          text-lg
          rounded-full
          bg-white/10
          inline-flex
          items-center
          justify-center
          h-7
          w-7



"/>
    <div class="flex
                justify-around
                items-center
                border-white-500
                backdrop-blur-2xl
                rounded-full
                w-40

">
        <div>
            <img src="https://i.ibb.co/hJtmmsh0/avatar1.png" alt="user avatar" class="rounded-full w-10 h-10"/>
        </div>
        <div>
            <p class="text-xs">YAO KISSI</p>
            <p class="text-xs text-gray-700">@thebig</p>
        </div>
            <div>
                <ChevronDown size="24" color="white" />
            </div>
    </div>

</nav>


<style>
    ul li {
        padding: 10px;
        margin: 0 10px;
        list-style: none;
        color:white;
        font-weight: bold;
        cursor: pointer;
    }
    input {
        color: white;

    }
    input::placeholder {
        color: white;
    }
</style>
