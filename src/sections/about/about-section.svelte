<script>
  import Icon from "@iconify/svelte";
  import Container from "../../components/container";
  import PurpleText from "../../components/purple-text/purple-text.svelte";
</script>

<Container.Root containerId="about" variant="to_bottom" isFullscreen>
  <Container.Body
    className={"flex flex-col gap-8 md:gap-0 justify-center items-center  md:flex-row h-full w-full"}
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
        class="font-secondary text-2xl text-cls-foreground-secondary text-left font-medium"
      >
        I am a Full Stack Developer from Brazil, currently studying Systems
        Analysis and Development at UNITAU. I have hands-on experience with Java
        and TypeScript, specializing in frameworks like Spring Boot and Next.js.
        My skill set includes certifications in English proficiency, web
        development, data structures and algorithms, and Excel. I primarily use
        Linux as my operating system. I am eager to apply my knowledge and grow
        professionally in new opportunities.
      </p>
      <div
        class="flex space-x-4 text-5xl text-cls-foreground-secondary justify-center md:justify-start"
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
  </Container.Body>
</Container.Root>
