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
      <ul class="flex space-x-4 text-4xl text-cls-foreground-secondary justify-center md:justify-start">
        {#each socialLinks as socialItem}
          <li>
            <a
              href={socialItem.href}
              target="_blank"
              class="flex items-center gap-1 hover:text-cls-foreground"
            >
              <Icon icon={socialItem.icon} />
            </a>
          </li>
        {/each}
      </ul>
    <ContactForm />
  </Container.Body>
</Container.Root>
