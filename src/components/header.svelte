<script lang="ts">
	import HeaderLink from './header-link.svelte';
</script>

<div class="flex items-center justify-between">
	<ul>
		<HeaderLink href="/" text="waris reshi" isMainLink/>
	</ul>

	<ul class="flex space-x-4">
		<HeaderLink href="/#" text="home" />
		<HeaderLink href="/whoami" text="whoami" />
		<HeaderLink href="/blog" text="blog" />
		<HeaderLink href="https://linkedin.com/in/wrsrsh" text="linkedin" />
	</ul>
</div>
