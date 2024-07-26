'use client'
import React, { FormEvent, useState } from 'react'
import { addCouple } from '../actions/couple-actions'

export const AddCouple = () => {

    const [player1, setPlayer1] = useState({
        name: '',
        last_name: ''
    })

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <form action={addCouple} className='flex flex-col gap-2 p-2'>
            <label htmlFor='name1'>Nombre Jugador 1</label>
            <input type='text' id='name1' name='name1' placeholder='Ingresar Nombre del jugador 1' />

            <label htmlFor='last_name1'>Nombre Jugador 1</label>
            <input type='text' id='last_name1' name='last_name1' placeholder='Ingresar Apellido del jugador 1' />

            <label htmlFor='name2'>Nombre Jugador 2</label>
            <input type='text' id='name2' name='name2' placeholder='Ingresar Nombre del jugador 2' />

            <label htmlFor='last_name2'>Nombre Jugador 2</label>
            <input type='text' id='last_name2' name='last_name2' placeholder='Ingresar Apellido del jugador 1' />


            <button type='submit' className='p-2 items-center justify-center border border-gray-600 rounded-xl'>Cargar</button>
        </form>
    )
}
