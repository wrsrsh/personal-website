<script lang="ts">
	export let href: string;
	export let text: string;
</script>

<li
	class={'cursor-pointer underline-offset-8 hover:underline'}
>
	<a {href} target={
		href.startsWith('http') ? '_blank' : '_self'
	}>[{text}]</a>
</li>
