import { useState } from "react";
import axiosInstance from "../axios-api/axios_instance";

const useUpload = (url: string) => {
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
      
        return axiosInstance.post(url, formData, 
        {headers: {"Content-Type": "multipart/form-data"}})
        .then(response => {
            setFileName(response.data)
        })
        .catch(response => {
            console.log(response.data)
            alert("Something went wrong with uploading image")
        });
    };

    return {fileName: fileName, isPictureChanged: isPictureChanged, selectedFiles: selectedFiles, selectFile: selectFile, uploadImage: uploadImage } 

}

export default useUpload;