<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  export let data: PageData;

  let searchTerm = "";
  let itemsToShow = 6;
  let isLoading = false;

  $: filteredPosts = data.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  $: visiblePosts = filteredPosts.slice(0, itemsToShow);

  async function handleScroll() {
    const bottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    if (bottom && itemsToShow < filteredPosts.length && !isLoading) {
      isLoading = true;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      itemsToShow = Math.min(itemsToShow + 6, filteredPosts.length);
      isLoading = false;
    }
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:head>
  <title>ewriq - blogs</title>
  <meta name="description" content="A small, simple website where he shared his blogs." />

  <meta property="og:title" content="> ewriq - blogs<" />
  <meta property="og:description" content="A small, simple website where he shared his blogs." />
  <meta property="og:type" content="article" />
</svelte:head>

{#if isLoading}
  <div class="fixed top-0 left-0 w-full h-1 z-50">
    <div class="h-full bg-[#6C757D] animate-pulse w-full"></div>
  </div>
{/if}

<div
  class="bg-[#FDF6E9] min-h-screen flex flex-col justify-between font-sans overflow-y-scroll"
  style="scrollbar-width: none;"
>

  <main class="flex-grow container mx-auto px-4 py-12">
    <div class="flex justify-center">
      <div
        class="bg-[#D9D9D9] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center"
      >
        <div class="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md">
          <img
            src="/image.png"
            alt="Profile Avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <h1 class="text-gray-800 text-2xl mb-10 border-r-emerald-950 font-bold"> ewriq</h1>
        <div class="w-full bg-[#6C757D] rounded-full p-1 flex items-center">
          <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search in my posts..."
            class="bg-gray-200 text-gray-800 placeholder-gray-500 rounded-full w-full py-2 px-4 focus:outline-none"
          />
        </div>
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Latest Posts
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each visiblePosts as post (post.slug)}
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <a href={`/blog/${post.slug}`} class="block">
              {#if post.imageUrl}
                <img
                  class="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt="{post.title} cover image"
                />
              {/if}
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p class="text-gray-700 text-base">{post.description}</p>
              </div>
            </a>
          </div>
        {/each}

        {#if visiblePosts.length === 0}
          <p class="text-center text-gray-500 col-span-full">No posts found.</p>
        {/if}

        {#if isLoading}
          {#each Array(3) as _}
            <div
              class="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
            >
              <div class="h-48 bg-gray-300 w-full"></div>
              <div class="p-6">
                <div class="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div class="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </main>

</div>

<style>
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
