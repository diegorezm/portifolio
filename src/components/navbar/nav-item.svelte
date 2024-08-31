<script lang="ts">
  export let title: string;
  export let path: string;
  export let isMobile = false;
  export let onClick: (() => void) | null = null;
</script>

<a
  href={path}
  class={`text-cls-foreground-secondary hover:text-cls-foreground ${isMobile && "text-center h-full w-full p-3 hover:bg-cls-grey text-2xl"}`}
  on:click={() => onClick?.()}
>
  {title}
</a>
