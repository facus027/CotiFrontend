import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className=" flex justify-center">
            <div >
                <Link to={'/'}>
                    <img className="w-60 h-28" alt="Logotipo CotillonSm" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png" />
                </Link>
            </div>
        </div>
    );
}