<script lang="ts">
	import PageTitle from '@/components/page-title.svelte';
	import { formatDate } from '@/utils/date-format';

	type Post = {
		title: string;
		date: Date;
		url: string;
	};

	const posts: Post[] = [
		{
			title: 'what i learned from building a linkedin outreach tool',
			date: new Date(Date.now()),
			url: '/whoami'
		},
		{
			title: 'my real philosophy - anti-minoritarian-thinkingism',
			date: new Date(Date.now()),
			url: '/whoami'
		},
		{
			title: '[w] blog',
			date: new Date(Date.now()),
			url: '/blog'
		}
	];
</script>

<div class="grid gap-5">
	<PageTitle title="blog" subtitle="read through my writings and 2am blogs" />
	<div class="grid gap-6">
		{#each posts as post}
			<a
				href={post.url}
				class="flex flex-row items-center justify-between gap-2 rounded-xs"
			>
				<p class="font-medium hover:text-orange-400">{post.title}</p>
				<p class="text-sm text-gray-500">{formatDate(new Date(post.date))}</p>
			</a>
		{/each}
	</div>
</div>
