import React from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-azul-lago text-mica-negra">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl pb-2">
            Blog Pessoal - Copyright:{" "}
          </p>

          <div className="flex gap-2">
            <a href="https://github.com/jacubavicius"><GithubLogo size={40} color="#333237" weight="fill" /></a>
            <a href="https://www.linkedin.com/in/gabriella-jacubavicius/"><LinkedinLogo size={40} color="#333237" weight="fill" /></a>
            <a href="https://www.instagram.com/gabirux_/"><InstagramLogo size={40} color="#333237" weight="fill" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
