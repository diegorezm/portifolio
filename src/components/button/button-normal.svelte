<script lang="ts">
  import ButtonSpinner from "./button-spinner.svelte";

  type ButtonType = "button" | "submit";
  export let type: ButtonType = "button";
  export let disabled = false;
  export let isLoading = false;
  export let label: string;
</script>

<button
  class="flex flex-row items-center justify-center w-full gap-2"
  {type}
  {disabled}
>
  {#if isLoading}
    <ButtonSpinner />
  {/if}
  {label}
</button>
