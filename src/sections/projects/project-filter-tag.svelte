<script lang="ts">
  import Icon from "@iconify/svelte";
  import { type Writable } from "svelte/store";

  export let tag: string;

  export let filtered: Writable<string[]>;

  const toggleTagToFilter = () => {
    filtered.update((tags) => {
      if (!tags.includes(tag)) {
        return [...tags, tag];
      } else {
        return tags.filter((t) => t !== tag);
      }
    });
  };
</script>

<button
  class="flex items-center gap-1 px-2 text-lg rounded-full w-fit h-fit bg-cls-grey text-cls-pink"
  on:click={toggleTagToFilter}
>
  <span>
    {tag}
  </span>
  <Icon icon="mdi:close" />
</button>
