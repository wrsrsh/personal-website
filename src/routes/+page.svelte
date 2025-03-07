<script lang="ts">
	// Define the interface for the data
	type ApodData = {
		copyright: string;
		date: string;
		explanation: string;
		hdurl: string;
		title: string;
		url: string;
	};

	// The data prop is passed from the server
	export let data: { data: ApodData | null };
</script>

<title> wrsrsh </title>

{#if data.data}
	<div class="my-8 grid grid-cols-[1fr_30%] gap-5">
		<img
			src={data.data.url}
			alt="NASA APOD"
			width="100"
			height="100"
			class="h-[80vh] w-full object-cover shadow-2xl"
		/>
		<div class="flex h-full flex-col gap-3 rounded-xs border p-3">
			<p class="flex flex-col">
				<span class="text-sm text-gray-800">[image of the day]</span>
				<span class="">{data.data.title}</span>
			</p>
			<div class="pr-2 text-sm">
				<span class="text-gray-800">[explanation]: {data.data.explanation}</span>
			</div>
			<p class="flex flex-col text-sm text-gray-800">
				<span>
					[copyright]: {data.data.copyright}
				</span>
				<span>
					[image] <a
						href={data.data.hdurl}
						target="_blank"
						class="underline-offset-4 hover:underline">{new URL(data.data.hdurl).hostname}</a
					>
				</span>
				<span>
					[source]: <a
						href="https://nasa.gov"
						target="_blank"
						class="underline-offset-4 hover:underline">nasa.gov</a
					>
				</span>
			</p>
		</div>
	</div>
{:else}
	<div>Error loading data</div>
{/if}
