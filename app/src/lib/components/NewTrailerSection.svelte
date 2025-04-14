<script>
    import { ArrowDownWideNarrow } from '@lucide/svelte';
    import bmfCover from '../../assets/images/bmfCover.jpg';

    let imageUrl = bmfCover;
</script>

<section
        class="
                w-[25%]
                backdrop-blur-2xl
                rounded-xl
                border-white-500
                h-[30vh]


        ">
    <div class="flex
                justify-between items-center w-[90%]
                mx-auto">
        <h2 class="text-sm">New Trailer</h2>
        <p class="text-sm"><span class="text-gray-700 text-xs">Sort By :</span> Today </p>
        <ArrowDownWideNarrow
                color="white"
                class="
            text-white
            inline-flex
            items-center
            justify-center"
        >
        </ArrowDownWideNarrow>
    </div>

    <div class="
                flex
                justify-between items-center w-[90%]
                mx-auto
                mt-5
                h-[20vh]
                bg-cover
                bg-no-repeat
                bg-center

"
            style="
            background-image: url({imageUrl})

            ;">
        <div class="absolute bottom-0 p-2 text-sm z-10  backdrop-blur-md rounded-b-xl  ">
            BMF: Black Mafia Family, Mexico Edition
        </div>
    </div>

</section>
<style>

</style>