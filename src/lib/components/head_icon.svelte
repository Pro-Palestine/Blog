<script lang="ts">
  import { favicon, any} from '$lib/config/icon'
</script>

<svelte:head>
  {#if favicon}
    <link rel="shortcut icon" href={favicon.src} sizes={favicon.sizes} type={favicon.type} />
  {/if}
</svelte:head>
