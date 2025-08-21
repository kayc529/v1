export const AboutSection = () => {
  return (
    <section
      id="section-about"
      className="flex w-full flex-col gap-y-5 lg:max-w-[35rem]"
    >
      <p className="text-md -mb-2 font-bold uppercase md:text-lg">about</p>
      <p className="text-slate-700 dark:text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </p>

      <p className="text-slate-700 dark:text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        <span className="intro-link">
          <a href="google.com"> SOMETHING </a>
        </span>
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </p>
    </section>
  );
};
