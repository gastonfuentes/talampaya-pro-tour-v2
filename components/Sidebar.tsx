import Image from 'next/image'
import React from 'react'
import { IoAddCircleOutline, IoBrowsersOutline, IoCalculator, IoFootball, IoGridOutline, IoLogoReact, IoTennisballOutline } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'
import AuthButton from './AuthButton'



const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30} />,
        title: 'Dashboard',
        subTitle: 'visualizacion'
    },
    {
        path: '/dashboard/cargar-zonas',
        icon: <IoAddCircleOutline size={30} />,
        title: 'Cargar Zonas',
        subTitle: 'seccion para cargar zonas del torneo'
    },
    {
        path: '/dashboard/zonas',
        icon: <IoGridOutline size={30} />,
        title: 'Ver Zonas',
        subTitle: 'zonas del torneo'
    },
]

export const Sidebar = () => {
    return (

        <div id="menu" style={{ width: '400px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoTennisballOutline className='mr-2' />
                    <span>Talampaya</span>
                    <span className="text-blue-500">Admin</span>
                    .
                </h1>
                <p className="text-slate-500 text-sm">Gestiona tus acciones y actividades</p>
            </div>

            <nav className="w-full flex justify-center p-2">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">

                    <AuthButton />
                </div>
            </nav>




            <div id="nav" className="w-full px-6">

                {menuItems.map(item => (
                    <SidebarMenuItem key={item.path} {...item} />

                ))}

            </div>
        </div>
    )
}