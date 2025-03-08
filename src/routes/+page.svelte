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
			class="h-full w-full rounded-md object-cover"
		/>
		<div class="flex h-full flex-col gap-3 rounded-xs p-3">
			<p class="flex flex-col">
				<span class="text-sm text-gray-500 select-none">[image of the day]</span>
				<span class="">{data.data.title}</span>
			</p>
			<div class="pr-2 text-sm">
				<p class="text-gray-100">
					<span class="text-gray-500 select-none">[explanation]: {" "}</span>{data.data.explanation}
				</p>
			</div>
			<p class="flex flex-col text-sm text-gray-500 select-none">
				<span>
					[copyright]: {data.data.copyright}
				</span>
				<span>
					[image] <a
						href={data.data.hdurl}
						target="_blank"
						class="underline-offset-4 hover:text-gray-100 hover:underline"
						>{new URL(data.data.hdurl).hostname}</a
					>
				</span>
				<span>
					[source]: <a
						href="https://nasa.gov"
						target="_blank"
						class="underline-offset-4 hover:text-gray-100 hover:underline">nasa.gov</a
					>
				</span>
			</p>
		</div>
	</div>
{:else}
	<div>Error loading data</div>
{/if}
