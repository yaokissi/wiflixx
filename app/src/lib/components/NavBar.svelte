<script>
    import '../../app.css';
    import { Bell, UserRound, ChevronDown, Search } from '@lucide/svelte';
</script>

<nav class="flex justify-evenly items-center w-full h-20 rounded-full">
    <div class="flex items-center w-[20%] border border-white rounded-full search">
        <Search class="text-white-500 pl-50" color="white"/>
        <input type="text"
               placeholder="Search movies"
               class="

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
    <Bell size="24" color="white" class="bg-red-500"/>
    <div class="flex justify-around items-center border-2 border-white-500 rounded-full">
        <div class="flex justify-around items-center p-10 rounded-full">
            <div>
                <UserRound size="24" color="white" />
                <span>Pseudo</span><br>
            </div>
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
