import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { cardsCategorie } from '../../data/index'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function CategoryListBox() {

    const params = useParams()

    const [selectedPerson, setSelectedPerson] = useState(cardsCategorie[0])
    return (
        <div className='flex gap-3'>
            <Link to={'/productos'} className='font-luckiest bg-orange-light rounded-3xl p-0.5 justify-center items-center flex'>Categorias :</Link>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <ListboxButton className="text-2xl uppercase font-chewy p-1 flex gap-7 ">{params.category == null ? "Elegir" : params.category}</ListboxButton>
                <ListboxOptions className=" bg-white" anchor="bottom">
                    {cardsCategorie.map((category) => (
                        <ListboxOption key={category.icons} value={category} className="data-[focus]:bg-blue-100 flex gap-5 p-1">
                            <Link className="font-chewy ml-2 text-2xl text-center tracking-wide hover:scale-125 transition duration-200" to={`/products/${category.img}`}>{category.name}</Link>
                            <img className="h-9" src={category.icons} alt="icn" />
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}
