import { useState } from "react";
import axiosInstance from "../axios-api/axios_instance";

const useUploadHook = () => {
    const [fileName, setFileName] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File | null>(null);
    const [currentFile, setCurrentFile] = useState<File | undefined>(undefined);
    const [isPictureChanged, setIsPictureChanged] = useState(false);

    const selectFile = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.files !== null){
            setSelectedFiles(event.currentTarget.files[0]);
        }
    };

    const uploadImage = () => {
        if ( selectedFiles !== null){
            let currentFile = selectedFiles;

            setCurrentFile(currentFile);
            upload(currentFile)
            .catch(() => {
                setCurrentFile(undefined);
            });
            setSelectedFiles(null);
            setIsPictureChanged(true)
        }
    };

    const upload = (file: File) => {
        let formData = new FormData();
      
        formData.append("file", file);
      
        return axiosInstance.post('/player/saveImage', formData, 
        {headers: {"Content-Type": "multipart/form-data"}})
        .then(response => {
            setFileName(response.data)
        })
        .catch(response => {
            console.log(response.data)
            alert("Something went wrong with uploading image")
        });
    };

    return [fileName, isPictureChanged, selectedFiles, selectFile, uploadImage ] as const

}

export default useUploadHook;