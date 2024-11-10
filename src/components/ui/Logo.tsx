import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className=" flex justify-center">
            <div >
                <Link to={'/'}>
                    <img className="w-44 h-28"
                        alt="Logotipo CotillonSm"
                        title="Logotipo CotillonSm"
                        src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1722520949/r24lgbeiyz1j3xs3mllv.png" />
                </Link>
            </div>
        </div>
    );
}