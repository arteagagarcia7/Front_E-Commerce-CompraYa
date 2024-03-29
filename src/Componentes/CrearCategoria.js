import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import crud from '../conexiones/crud';
import { useNavigate } from 'react-router-dom';

const CrearCategoria = () => {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        nombre: '',
        imagen: ''
    })

    const { nombre, imagen } = categoria;

    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    const crearCategoria = async () => {
        const data = {
            nombre: categoria.nombre,
            imagen: categoria.imagen
        }
        const response = await crud.POST(`/api/categoria`, data);
        const mensaje = response.msg;
        console.log(mensaje);
        navigate("/Admin");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCategoria();
    }


    return (
        <>
            <Header />
            <div className='md:flex md:min-h-screen'>
                <Sidebar />
                <main className='flex-1'>
                    <div className='mt-10 flex justify-center'>
                        <h1 className='inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent'>
                            Crear Categoria
                        </h1>
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <form
                            onSubmit={onSubmit}
                            className='my-10 bg-white shadow-orange-500 rounded-lg p-10'
                        >
                            <div className='my-5'>
                                <label className='uppercase text-gray-600 block text-xl font-bold'>Nombre de la Categoria</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder='Nombre'
                                    className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                                    value={nombre}
                                    onChange={onChange}
                                />

                                <label className='uppercase text-gray-600 block text-xl font-bold'>Imagen de la Categoria</label>
                                <input
                                    type="text"
                                    id="imagen"
                                    name="imagen"
                                    placeholder='Nombre'
                                    className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
                                    value={imagen}
                                    onChange={onChange}
                                />
                            </div>

                            <input
                                type="submit"
                                value="Crear Categoria"
                                className='bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors'
                            />
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

export default CrearCategoria;