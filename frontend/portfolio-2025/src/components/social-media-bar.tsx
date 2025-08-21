import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const SocialMediaBar = () => {
  return (
    <div className="flex items-center justify-start gap-3">
      <a href="https://github.com/kayc529" target="_blank">
        <FaGithub className="!h-7 !w-7 opacity-65 transition-opacity duration-500 hover:opacity-100 dark:opacity-80" />
      </a>

      <a href="https://www.linkedin.com/in/kay-cheung-hk/" target="_blank">
        <FaLinkedin className="!h-7 !w-7 opacity-65 transition-opacity duration-500 hover:opacity-100 dark:opacity-80" />
      </a>

      <a href="mailto:ky.cheung529@gmail.com">
        <AiOutlineMail className="!h-7 !w-7 opacity-65 transition-opacity duration-500 hover:opacity-100 dark:opacity-80" />
      </a>
    </div>
  );
};
