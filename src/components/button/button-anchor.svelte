<script lang="ts">
  import Icon from "@iconify/svelte";
  export let label: string;
  export let href: string;
  export let icon: string | null = null;
  export let toBlank = false;

  let className = "w-full text-center px-1";
  if (icon) {
    className = "flex items-center justify-center gap-2 text-center w-full";
  }
</script>

<a class={className} {href} target={toBlank ? "_blank" : "_self"}>
  <span>{label}</span>
  {#if icon}
    <Icon {icon} />
  {/if}
</a>
