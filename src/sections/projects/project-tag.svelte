<script lang="ts">
  import { type Writable } from "svelte/store";
  import Button from "../../components/button";

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

<Button.Root variant="dark" className="px-2">
  <Button.Normal label={"#" + tag} type="button" onClick={toggleTagToFilter} />
</Button.Root>
