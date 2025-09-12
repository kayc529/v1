import "./App.css";
import { LeftColumn } from "./components/left-column";
import { RightColumn } from "./components/right-column";
import { DarkLightModeSwitch } from "./components/dark-light-mode-switch";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center bg-gray-100 px-6 md:px-12 dark:bg-gray-900">
        <nav className="0 fixed top-0 z-20 flex w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="container flex max-w-[1150px] justify-end">
            <DarkLightModeSwitch className="pt-3 pr-5" />
          </div>
        </nav>

        <main
          id="content"
          className="relative container flex h-full flex-col gap-x-10 text-slate-900 lg:flex-row lg:justify-center dark:text-zinc-200"
        >
          <LeftColumn />
          <RightColumn />
        </main>
      </div>
    </>
  );
}

export default App;
