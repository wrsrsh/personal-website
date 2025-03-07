<script>
	import HeaderLink from './header-link.svelte';
</script>

<div class="flex items-center justify-between">
	<ul>
		<HeaderLink href="/" text="waris reshi" />
	</ul>

	<ul class="flex space-x-4">
		<!-- <HeaderLink href="/whoami" text="whoami" /> -->
		<HeaderLink href="/essays" text="essays" />
		<HeaderLink href="/bio" text="bio" />
		<HeaderLink href="/work" text="work" />
		<HeaderLink href="https://linkedin.com/in/wrsrsh" text="ln" />
	</ul>
</div>
