import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-sky-500 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl text-slate-950 font-medium bg-gray-100 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-sky-300 hover:bg-sky-500 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-red-300 hover:bg-red-500 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas