<script>
import {Play,Ellipsis } from '@lucide/svelte';

import bmfCover from '../../../assets/images/bmfCover.jpg';

let imageUrl = bmfCover;
</script>
<section class="w-[70%]
                mx-auto
                p-2

                ">

    <div class="flex justify-between">
        <h1 class="text-white text-xl font-bold">You might like</h1>
        <p class="text-sm text-white backdrop-blur-2xl rounded-full p-2">See all</p>
    </div>

    <article class="overflow-x-auto scroll-smooth">

        <div class=" flex justify-evenly w-[100%] mt-5 ">
            <div class="
                flex

                justify-between
                items-center
                w-[30%]
                rounded-xl
                mx-auto
                mt-5
                h-[25vh]
                relative
                bg-cover
                bg-no-repeat
                bg-center
"
                 style="
            background-image: url({imageUrl});

">
                <button class=" absolute text-center backdrop-blur-3xl top-2 right-4 rounded-full text-white"> <Ellipsis class="size-5"></Ellipsis> </button>
                <p class="
            absolute
           top-15
           left-3
           text-xs
           mb-5
           p-1
           text-white
           text-center
           backdrop-blur-2xl
           rounded-xl">
                    Animation
                </p>
                <div class=" flex justify-between absolute bottom-0 text-sm text-white backdrop-blur-2xl mx-auto p-2 mt-10 rounded-b-xl  ">
                    <p class="text-xs w-[50%]"> <span class="text-white text-base">Black Mafia Family </span>  Mexico Edition </p>
                    <Play class="text-black  size-9 bg-white rounded-full p-2"></Play>
                </div>
            </div>

            <div class="
                flex
                justify-between
                items-center
                w-[30%]

                rounded-xl
                mx-auto
                mt-5
                h-[25vh]
                relative
                bg-cover
                bg-no-repeat
                bg-center
"
                 style="
            background-image: url({imageUrl});

">
                <button class=" absolute flex items-center text-center backdrop-blur-3xl top-2 right-4 rounded-full text-white"> <Ellipsis class="size-5"></Ellipsis> </button>
                <p class="
            absolute
           top-15
           left-3
           text-xs
           mb-5
           p-1
           text-white
           text-center
           backdrop-blur-2xl
           rounded-xl">
                    Animation
                </p>
                <div class=" flex justify-between absolute bottom-0 text-sm text-white backdrop-blur-2xl mx-auto p-2 mt-10 rounded-b-xl  ">
                    <p class="text-xs w-[50%]"> <span class="text-white text-base">Black Mafia Family </span>  Mexico Edition </p>
                    <Play class="text-black  size-9 bg-white rounded-full p-2"></Play>
                </div>
            </div>

            <div class="
                flex
                justify-between
                items-center
                w-[30%]

                rounded-xl
                mx-auto
                mt-5
                h-[25vh]
                relative
                bg-cover
                bg-no-repeat
                bg-center
"
                 style="
            background-image: url({imageUrl});

">
                <button class=" absolute text-center backdrop-blur-3xl top-2 right-4 rounded-full text-white"> <Ellipsis class="size-5"></Ellipsis> </button>
                <p class="
            absolute
           top-15
           left-3
           text-xs
           mb-5
           p-1
           text-white
           text-center
           backdrop-blur-2xl
           rounded-xl">
                    Animation
                </p>
                <div class=" flex justify-between absolute bottom-0 text-sm text-white backdrop-blur-2xl mx-auto p-2 mt-10 rounded-b-xl  ">
                    <p class="text-xs w-[50%]"> <span class="text-white text-base">Black Mafia Family </span>  Mexico Edition </p>
                    <Play class="text-black  size-9 bg-white rounded-full p-2"></Play>
                </div>
            </div>

        </div>
    </article>

</section>
