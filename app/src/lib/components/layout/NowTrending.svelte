<script>
import {Ellipsis, Download, Play } from "@lucide/svelte";
</script>

<section
         class="w-[70%]
                 rounded-xl
                 border-white-500
                 h-[50vh]
                 overflow-auto

"
            style="
            background-image: url('https://i.ibb.co/9mgS28Jp/76af92d-1685522072454-telerama-undefined-12.jpg');
            background-size: cover;
            background-position: center;
            opacity: 0.90;
"
>
    <article class="pl-5">
        <p class="
           text-xs
           mt-5
           z-10
           text-white
           text-center
           backdrop-blur-2xl
           w-[15%]
            p-2
           rounded-full">
            🔥 Now Trending
        </p>

       <div class="flex justify-between w-[20%] mt-32 ">
           <p class="
           text-xs
           p-2
           z-10
           text-white
           text-center
           backdrop-blur-2xl

           rounded-full">
               Animation
           </p>

           <p class="
           text-xs
           p-2
           z-10
           text-white
           text-center
           backdrop-blur-2xl

           rounded-full">
               adventure
           </p>
       </div>
        <div class="w-[40%] mt-5 ">
            <h1 class="text-white text-2xl font-bold">Spider-Man : <br>
            Across the Spider-Verse
            </h1>
            <p class="text-gray-300 text-sm mt-2">
                Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.
            </p>
        </div>
      <div class=" flex justify-between w-[60%] mt-4 ">
          <button class="flex justify-around bg-white p-3 w-[30%] rounded-full"> <Play class=""></Play> Watch</button>
          <button class="flex justify-around border text-white p-3 w-[40%] rounded-full"> <Download></Download> Download</button>
          <button class="w-[11%] border flex justify-center items-center rounded-full text-white"> <Ellipsis></Ellipsis> </button>
      </div>
    </article>
</section>