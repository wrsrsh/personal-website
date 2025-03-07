<script lang="ts">
	import { onMount } from 'svelte';

	// Define the interface for the data
	type ApodData = {
		copyright: string;
		date: string;
		explanation: string;
		hdurl: string;
		title: string;
		url: string;
	};

	let data: ApodData | null = null; // Initialize as null instead of undefined
	let loading = true;

	onMount(async () => {
		try {
			const response = await fetch(
				'https://api.nasa.gov/planetary/apod?api_key=F4u0jBIbzVmzNX8zGwGsHVZLyjaOW8NSg3HArCYf'
			);
			data = await response.json();
			loading = false;
		} catch (error) {
			console.error('Failed to fetch APOD:', error);
			loading = false;
		}
	});

</script>

{#if loading}
	<div>Loading...</div>
{:else if data}
	<div class="my-8 grid grid-cols-[1fr_30%] gap-5">
		<img
			src={data.url}
			alt="NASA APOD"
			width="100"
			height="100"
			class="h-[80vh] w-full object-cover shadow-2xl"
		/>
		<div class="flex h-full flex-col gap-3 rounded-xs border p-3">
			<p class="flex flex-col">
				<span class="text-sm text-gray-800">[image of the day]</span>
				<span class="">{data.title}</span>
			</p>
			<div class="text-sm pr-2">
                <span class="text-gray-800 ">[explanation]: {data.explanation}</span>
			</div>
			<p class="flex flex-col text-sm text-gray-800">
				<span>
					[copyright]: {data.copyright}
				</span>
				<span>
					[high-quality] <a
						href={data.hdurl}
						target="_blank"
						class="underline-offset-4 hover:underline">{new URL(data.hdurl).hostname}</a
					>
				</span>
			</p>
		</div>
	</div>
{:else}
	<div>Error loading data</div>
{/if}
