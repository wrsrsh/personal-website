<script>
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import Home from '../components/home.svelte';

	const name = 'script';
</script>

<main class="flex min-h-screen justify-center bg-gray-100 p-7 text-black">
	<section class="w-[70%] justify-between flex flex-col">
		<Header />
		<Home />
		<Footer />
	</section>
</main>
