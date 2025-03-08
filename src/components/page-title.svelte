<script lang="ts">
    export let title: string;
    export let subtitle: string;
</script>

<p class="flex flex-col">
    <span class="font-medium text-2xl">/{title}</span>
    <span class="text-sm font-medium">{subtitle}</span>
</p>