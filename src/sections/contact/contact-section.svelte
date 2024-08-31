<script lang="ts">
  import Icon from "@iconify/svelte";
  import Container from "../../components/container";
  import ContactForm from "./contact-form.svelte";
  type SocialLink = {
    icon: string;
    href: string;
    label: string;
  };
  const socialLinks: SocialLink[] = [
    {
      icon: "ion:logo-github",
      href: "https://github.com/diegorezm",
      label: "diegorezm",
    },
    {
      icon: "ion:logo-linkedin",
      href: "https://www.linkedin.com/in/diegorezm/",
      label: "diegorezm",
    },
    {
      icon: "ion:email",
      href: "mailto:diegommrez12@gmail.com",
      label: "diegommrez12@gmail.com",
    },
  ];
</script>

<Container.Root variant="to_top" containerId="contact">
  <Container.Title>Contact</Container.Title>
  <Container.Body
    className="flex flex-col items-center justify-center mb-2 gap-4"
  >
    <div class="flex items-center lg:justify-center">
      <ul class="flex gap-4">
        {#each socialLinks as socialItem}
          <li class="text-4xl md:text-2xl 2xl:text-3xl">
            <a
              href={socialItem.href}
              target="_blank"
              class="flex items-center gap-1 hover:opacity-80"
            >
              <Icon icon={socialItem.icon} />
              <span class="hidden md:block">{socialItem.label}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <ContactForm />
  </Container.Body>
</Container.Root>
