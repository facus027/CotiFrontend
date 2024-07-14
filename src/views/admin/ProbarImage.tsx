import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { uploadImage } from '../../api/ProductApi';
//import { useNavigate } from 'react-router-dom';


type ProjectFormProps = {
    handleImage: (imageUrl: string) => void

};


const ProbarImage = ({ handleImage }: ProjectFormProps) => {

    const [file, setFile] = useState(null);


    //const navigate = useNavigate()

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file first.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        mutate(formData)
    };

    const { mutate } = useMutation({
        mutationFn: uploadImage,
        onError: (data) => {
            toast.error(data.message)
        },
        onSuccess: (data) => {
            toast.success('Imagen subida exitosamente')
            console.log(data)
            handleImage(data)
        }
    })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>


        </>
    );
};

export default ProbarImage;