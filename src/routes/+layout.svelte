<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	let { children } = $props();
</script>

<main class="flex min-h-screen justify-center bg-gray-100 p-7 text-black">
	<section class="flex w-[70%] flex-col justify-between">
		<Header />
		{@render children()}
		<Footer />
	</section>
</main>
