

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}: PaginationProps
) {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <>
            <div className="flex justify-center space-x-2 mt-4">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(index + 1)}
                        className={`px-4 py-2 rounded ${currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-black'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    Siguiente
                </button>
            </div>
        </>
    )
}
