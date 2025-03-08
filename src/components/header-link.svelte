<script lang="ts">
	export let href: string;
	export let text: string;
	export let isMainLink: boolean = false;
</script>

<li class={'cursor-pointer underline-offset-8 hover:underline'}>
	<a {href} target={href.startsWith('http') ? '_blank' : ''}
		>{#if !isMainLink}[{text.charAt(0)}]{/if}
		{text}</a
	>
</li>
