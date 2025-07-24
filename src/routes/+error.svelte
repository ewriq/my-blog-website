<script>
    import { page } from "$app/stores";
</script>
<div
  class="bg-[#FDF6E9] min-h-screen  justify-between font-sans overflow-y-scroll items-center"
  style="scrollbar-width: none;"
>

<div class="flex-grow container mx-auto px-4 py-12">
    <div class="flex justify-center">
      <div
        class="bg-[#D9D9D9] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center"
      >
        <h1 class="text-gray-800 text-2xl mb-10 border-r-emerald-950 font-bold"> {$page.status}</h1>
        <a class="text-gray-800 text-1xl mb-10 border-r-emerald-950 font-bold" href="/">Return Homie</a>
      </div>
</div>
</div>
</div>