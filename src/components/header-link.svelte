<script lang="ts">
	export let href;
	export let text;
	const pathname = '/';
</script>

<li
	class={'cursor-pointer underline-offset-8 hover:underline'}
>
	<a {href}>[{text}]</a>
</li>
