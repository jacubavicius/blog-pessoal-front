import React, { useContext } from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const { usuario, handleLogout } = useContext(AuthContext);

  let footerComponent;

  let data = new Date().getFullYear();

  if (usuario.token !== "") {
    footerComponent = (
      <>
        <div className="flex justify-center bg-sky-200 text-slat-950">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl pb-2">Blog Pessoal - Copyright: {data}</p>

            <div className="flex gap-2">
              <a href="https://github.com/jacubavicius">
                <GithubLogo size={40} color="#020617" weight="fill" />
              </a>
              <a href="https://www.linkedin.com/in/gabriella-jacubavicius/">
                <LinkedinLogo size={40} color="#020617" weight="fill" />
              </a>
              <a href="https://www.instagram.com/gabirux_/">
                <InstagramLogo size={40} color="#020617" weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
