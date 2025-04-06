<script>
import '../app.css';
import { Bell, UserRound, ChevronDown, Search } from '@lucide/svelte';
</script>

<nav class="flex justify-evenly ">
    <div class="bg-transparent flex items-center">
        <Search/>
        <input type="text" placeholder="Search movies " class="ml-20" />
    </div>
    <ul class="">
        <li>Movie</li>
        <li>TV Series</li>
        <li>Animations</li>
        <li>Mistery</li>
    </ul>
    <div>
        <Bell size="24" color="white" />
        <div>
            <div>
                <UserRound size="24" color="white" />
                <span>Pseudo</span><br>
                <span>pseudo@gmail.com</span>
            </div>
            <ChevronDown size="24" color="white" />
        </div>
    </div>
</nav>

<slot />

<style>

</style>
