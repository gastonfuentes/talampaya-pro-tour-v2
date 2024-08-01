'use client'


import { useZonesBoundStore } from '@/store/zones'
import { GenderSelect } from './GenderSelect'
import { CategoriSelect } from './CategoriSelect'


export const CategoriesGrid = () => {


    const orderedCategories = useZonesBoundStore((state) => state.orderedCategories)


    return (
        <div>
            <div>Categori grid</div>

            {orderedCategories ? <CategoriSelect categories={orderedCategories} /> : ''}


        </div>
    )
}