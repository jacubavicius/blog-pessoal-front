import React from "react";
import home from "../../assets/home.png";
import "./Home.css";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-sky-200 flex justify-center">
        <div className="container grid grid-cols-2 text-slat-950">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem-vindo a Bordo!</h2>
            <p className="text-xl">Descubra o mundo, um destino de cada vez.</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="text-white bg-sky-400 hover:bg-sky-800 py-2 px-4">Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={home} alt="" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
