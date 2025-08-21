import { certificates } from "../data/certificates";
import { FaArrowRight } from "react-icons/fa6";

export const CertificateSection = () => {
  return (
    <section id="section-certificates" className="flex w-full flex-col">
      <p className="text-md mb-5 font-bold uppercase md:text-lg">
        Certificates
      </p>

      <ol className="flex w-full flex-col gap-y-5">
        {certificates.map((cert) => (
          <li className="group flex w-full items-center odd:flex-row odd:justify-start even:flex-row-reverse even:justify-end">
            {/* Badge Image */}
            <img
              // className="h-30 w-30"
              src={cert.image}
              alt="AWS Certified Solutions Architect – Associate"
            />

            {/* Details */}
            <div className="lg:hover:bg-neon/10 lg:hover:border-neon/15 relative flex flex-col rounded-md border-1 border-transparent p-4 transition-all duration-300 lg:dark:hover:border-white/15 lg:dark:hover:bg-white/10">
              {/* Cert Name */}

              <p className="dark:group-hover:text-neon group-hover:text-neon-secondary relative font-bold transition-colors duration-300">
                {cert.name}
                <span>
                  <FaArrowRight className="-mt-0.5 ml-1 inline-block -rotate-45 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </p>

              {/* Issue */}
              <p className="text-slate-700 dark:text-zinc-400">
                Issued by {cert.issuedBy}, {cert.issueDate}
              </p>
              <a
                className="absolute z-10 h-full w-full"
                href={cert.link}
                target="_blank"
              ></a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
