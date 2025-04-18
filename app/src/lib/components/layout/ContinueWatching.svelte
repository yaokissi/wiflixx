<script>
import { Play } from '@lucide/svelte';
</script>
<section class="w-[23%]
                mx-auto
                backdrop-blur-2xl
                h-[30vh]
                p-2
                rounded-xl
                text-white
                ">
    <article class="mx-auto w-[90%] mt-2">
        <h1>
            Continue Watching
        </h1>
        <div class=" w-[95%] mt-3 ">

            <div class="flex justify-between w-[100%]">
                <div class="flex justify-around w-[60%]">
                    <div class="w-[35%] ">
                        <img src="https://i.ibb.co/LddPXLHn/2256558.jpg"
                             class="rounded-xl
                                    h-[50px]
                                    w-[50px]
                                    object-cover
                                    "

                             alt="Continue Watching" />
                    </div>
                    <div class="w-[60%]">
                        <p class="text-[10px]">Dark Season 3</p>
                        <p class="text-[7px]">Episode 3</p>
                    </div>
                </div>

                <div class="w-[11%] h-[11%] rounded-full backdrop-blur-xs
                            bg-white

                            flex items-center
                            justify-center
">
                    <Play class="text-xs text-black size-5"></Play>
                </div>
            </div>
        </div>
    </article>

</section>
