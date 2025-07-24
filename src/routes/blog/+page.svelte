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
