<script>
import '../app.css';
import { Bell, UserRound, ChevronDown, Search } from '@lucide/svelte';
</script>

<nav class="flex justify-evenly">
    <div class="flex items-center border border-white rounded-full">
        <Search/>
        <input type="text" placeholder="Search movies " class="placeholder:text-white-500 bg-transparent border-none focus:outline-none" />
    </div>
    <ul class="flex justify-evenly rounded-full">
        <li>Movie</li>
        <li>TV Series</li>
        <li>Animations</li>
        <li>Mistery</li>
    </ul>
    <div class="flex justify-around items-center p-10 border-2 border-white-500 rounded-full">
        <Bell size="24" color="white" />
        <div class="flex justify-around items-center p-10 rounded-full">
            <div>
                <UserRound size="24" color="white" />
                <span>Pseudo</span><br>
            </div>
            <ChevronDown size="24" color="white" />
        </div>
    </div>
</nav>

<slot />

<style>
ul li {
    padding: 10px;
    margin: 0 10px;
    list-style: none;
    color:white;
    font-weight: bold;
    cursor: pointer;

}
</style>
