<script lang="ts">
export let name: string;
export let type: "text" | "email" = "text";
export let placeholder: string;
export let error: string | null = null;
export let isTextArea = false;

const inpClass =
    "bg-[#1F2430] rounded-lg p-2 shadow-default focus:outline-none border-2 border-cls-grey focus:border-2 focus:border-cls-light-green ";
const label = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<div class="flex flex-col w-full space-y-1 2xl:space-y-2 2xl:text-lg">
  <label for={name} class="text-cls-light-green">
    {label}
  </label>
  {#if isTextArea}
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        class={inpClass + " h-24 2xl:h-28"}
      />
  {:else}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        class={inpClass}
      />
  {/if}
  {#if error}
      <p class="text-cls-red font-secondary text-md 2xl:text-lg">{error}</p>
  {/if}
</div>
