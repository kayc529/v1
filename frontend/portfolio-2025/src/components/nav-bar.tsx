import ScrollSpy from "react-scrollspy-navigation";
import { nav } from "../data/nav";

export const NavBar = () => {
  return (
    <ScrollSpy activeClass="active" offsetTop={58}>
      <nav>
        <ul className="flex flex-col gap-y-4">
          {nav.map(({ href, title }) => (
            <li key={href} className="flex items-center">
              <a href={href} className="nav-link">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </ScrollSpy>
  );
};
