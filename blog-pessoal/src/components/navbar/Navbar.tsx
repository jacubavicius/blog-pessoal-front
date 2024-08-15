import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  let navbarComponent;

  return (
    <>
      <div className="w-full bg-sky-200 text-slat-950 flex justify-center py-4">
        <div className="container flex justify-between text-xl">
          <Link to='/home' className='text-2xl font-bold uppercase'>Destinos Incríveis</Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">Postagens</Link>
            <Link to="/temas" className="hover:underline">Temas</Link>
            <Link to="/cadastroTema" className="hover:underline">Cadastrar tema</Link>
            <div className="hover:underline">Perfil</div>
            <Link to="" onClick={logout} className="hover:underline">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
