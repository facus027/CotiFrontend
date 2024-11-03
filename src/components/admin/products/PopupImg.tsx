

export default function PopupImg({ img }: { img: string }) {
    return (
        <div className="absolute overflow-visible top-5 right-24 mt-10 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-40">
            <div className="shadow space-y-1 p-4 bg-white border-t border-gray-200">
                <img src={img} alt="imagen_producto" />
            </div>
        </div>
    )
}
