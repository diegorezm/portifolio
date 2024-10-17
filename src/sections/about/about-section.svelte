<script>
  import Icon from "@iconify/svelte";
  import Container from "../../components/container";
  import PurpleText from "../../components/purple-text/purple-text.svelte";
  import { technologies } from "$lib/content/technologies";
</script>

<Container.Root containerId="about" isFullscreen>
  <Container.Body className={"flex flex-col gap-20 h-full w-full"}>
    <section
      class="flex flex-col gap-8 md:gap-0 justify-center items-center md:flex-row"
    >
      <div class="flex justify-center md:w-1/2 2xl:w-1/3">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src="/profile_image.png"
          alt="A picture of me in a suit."
          class="rounded-lg w-3/4 shadow-pink-shadow"
        />
      </div>
      <div class="md:w-1/2 space-y-4">
        <h1 class="font-primary font-semibold text-4xl text-start">
          <PurpleText>About me</PurpleText>
        </h1>
        <p
          class="font-secondary text-2xl text-cls-foreground-secondary text-justify font-medium"
        >
          I am a Full Stack Developer from Brazil, currently studying Systems
          Analysis and Development at UNITAU. I have hands-on experience with
          Java and TypeScript, specializing in frameworks like Spring Boot and
          Next.js. My skill set includes certifications in English proficiency,
          web development, data structures and algorithms, and Excel. I
          primarily use Linux as my operating system. I am eager to apply my
          knowledge and grow professionally in new opportunities.
        </p>
        <div
          class="flex space-x-4 text-5xl text-cls-foreground-secondary justify-start"
        >
          <a
            href="https://www.linkedin.com/in/diegorezm/"
            class="hover:text-cls-pink"
            target="_blank"
          >
            <Icon icon="ion:logo-linkedin" />
          </a>
          <a
            href="https://github.com/diegorezm"
            class="hover:text-cls-pink"
            target="_blank"
          >
            <Icon icon="ion:logo-github" />
          </a>
        </div>
      </div>
    </section>
    <section>
      <h1 class="font-primary font-semibold text-3xl text-start">
        Technologies I am familiar with:
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {#each technologies as technology}
          <div class="flex flex-col gap-2 rounded-lg p-2 w-fit h-fit">
            <Icon icon={technology.icon} class="text-5xl" />
            <h2 class="font-primary font-semibold text-2xl">
              {technology.title}
            </h2>
            <p class="font-secondary text-cls-foreground-secondary text-lg text-left">
              {technology.description}
            </p>
          </div>
        {/each}
      </div>
    </section>
  </Container.Body>
</Container.Root>
