import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { cardsCategorie } from '../../data/index'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CategoryListBox() {

    const [selectedPerson, setSelectedPerson] = useState(cardsCategorie[0])

    return (
        <>
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <ListboxButton className="text-3xl uppercase font-chewy p-1 flex gap-7 ">{selectedPerson.name} <img className="h-9" src={`/public/categories/icons-${selectedPerson.icons}.png`} alt="icn" /></ListboxButton>
                <ListboxOptions className=" bg-white" anchor="bottom">
                    {cardsCategorie.map((category) => (
                        <ListboxOption key={category.icons} value={category} className="data-[focus]:bg-blue-100 flex gap-5 p-1">
                            <Link className="font-chewy ml-2 text-2xl text-center tracking-wide hover:scale-125 transition duration-200" to={`/products/${category.icons}`}>{category.name}</Link><img className="h-9" src={`/public/categories/icons-${category.icons}.png`} alt="icn" />
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </>
    )
}
