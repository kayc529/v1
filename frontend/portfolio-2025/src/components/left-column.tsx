import { NavBar } from "./nav-bar";
import { SocialMediaBar } from "./social-media-bar";

export const LeftColumn = () => {
  return (
    <div className="relative flex h-full w-full flex-col justify-between pt-18 lg:sticky lg:top-0 lg:min-h-screen lg:w-max lg:pt-24 lg:pb-24">
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-start">
          <h1 className="text-5xl font-bold">Kay Cheung</h1>
          <p className="py-4 text-xl">Full Stack Developer</p>
          <p className="w-[350px] text-slate-700 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien.
          </p>
        </div>

        {/* TODO */}
        <div className="mt-20 hidden lg:block">
          <NavBar />
        </div>
      </div>

      <div className="mt-10">
        <SocialMediaBar />
      </div>
    </div>
  );
};
