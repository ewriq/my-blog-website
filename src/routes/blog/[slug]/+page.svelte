<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const meta = data.meta; 
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />

  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  {#if meta.imageUrl}
    <meta property="og:image" content={meta.imageUrl} />
  {/if}
  <meta property="og:type" content="article" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  {#if meta.imageUrl}
    <meta name="twitter:image" content={meta.imageUrl} />
  {/if}
</svelte:head>


<div class="bg-[#FDF6E9] min-h-screen flex flex-col font-sans">

  <main class="flex-grow w-full px-4 py-10 sm:py-14">

    <article
      class="max-w-6xl mx-auto bg-white/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg"
    >
      {#if meta.imageUrl}
   
        <img
          src={meta.imageUrl}
          alt="{meta.title} için kapak resmi"
          class="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl mb-6 md:mb-8 shadow-md"
        />
      {/if}

 
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        {meta.title}
      </h1>

    
      <p class="text-base sm:text-lg text-gray-600 mb-8 border-l-4 border-[#6C757D] pl-4">
        {meta.description}
      </p>

      <hr class="my-6 md:my-8" />
      <div
        class="prose prose-lg max-w-none prose-p:text-gray-700 prose-h2:text-gray-800 prose-a:text-blue-600 hover:prose-a:text-blue-800"
      >
        <svelte:component this={data.content} />
      </div>
    </article>
  </main>
</div>