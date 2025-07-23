<script lang="ts">
  import type { PageData } from "./$types";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data: PageData;
</script>

<div class="bg-[#FDF6E9] min-h-screen flex flex-col font-sans">
  <main class="flex grow mt-[56px] py-14 w-full">
    <div class="container mx-auto px-4">
      <article
        class="w-[1400px] mx-auto bg-white/50 p-6 sm:p-10 rounded-2xl shadow-lg"
      >
        {#if data.meta.imageUrl}
          <img
            src={data.meta.imageUrl}
            alt="{data.meta.title} için kapak resmi"
            class="w-full h-64 object-cover rounded-xl mb-8 shadow-md"
          />
        {/if}

        <h1 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          {data.meta.title}
        </h1>

        <p class="text-lg text-gray-600 mb-8 border-l-4 border-[#6C757D] pl-4">
          {data.meta.description}
        </p>

        <hr class="my-8" />

        <div
          class="prose prose-lg max-w-none prose-h2:text-gray-800 prose-a:text-blue-600 hover:prose-a:text-blue-800"
        >
          <svelte:component this={data.content} />
        </div>
      </article>
    </div>
  </main>
</div>
