import { FaWhatsapp } from "react-icons/fa";

type IconWhatsAppProps = {
    name: string,
    cel: string
}

export default function IconWhatsApp({ name, cel }: IconWhatsAppProps) {
    return (
        <>
            <p className=" text-base font-extralight text-green-700 flex gap-2"><FaWhatsapp size={30} />
                <a href={`https://wa.me/549${cel}`} target="_blank"
                    className="hover:underline hover:underline-offset-4 hover:decoration-wavy">{name}</a>
            </p>
        </>
    )
}
