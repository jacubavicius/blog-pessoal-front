import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className="w-full bg-sky-200 text-slat-950 flex justify-center py-4">
        <div className="container flex justify-between text-xl">
          <Link to="/home" className="text-2xl font-bold uppercase">
            Destinos Incríveis
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">Postagens</Link>
            <Link to="/temas" className="hover:underline">Temas</Link>
            <Link to="/cadastroTema" className="hover:underline">Cadastrar tema</Link>
            <Link to="/perfil" className="hover:underline">Perfil</Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
