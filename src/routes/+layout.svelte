<script lang="ts">
	import { page } from "$app/stores";
	import { derived } from "svelte/store";
	import Navbar from "$lib/components/Navbar.svelte";
	import Sidebar from "$lib/components/Footer.svelte";
	let { children } = $props();
	import "../app.css";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />
{@render children()}
<Footer />
