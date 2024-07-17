<script lang="ts">
export let title: string;
export let path: string;
export let isMobile = false;
export let onClick: () => void = () => {};
</script>

<a href={path}
    class={`text-cls-foreground-secondary hover:text-cls-foreground ${isMobile && "text-center h-full w-full p-3 hover:bg-cls-grey"}`}
    on:click={onClick}
    >
      {title}
</a >
