import axios from 'axios';
import React, { useState } from 'react';

const UploadFile = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [previousApiResponse, setPreviousApiResponse] = useState(null)
    const [currentApiResponse, setCurrentApiResponse] = useState(null)
    const [animationKey, setAnimationKey] = useState(0)
    const [isfileUploaded, setIsFileUploaded] = useState(false)
    

    const handleFileChange = (e: any) => {
        const file = e.target.files[0]
        setSelectedFile(file)
        setIsFileUploaded(true)
    }

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile)
            formData.append('model', 'whisper-1')

            axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
                headers: {
                    'Authorization': 'Bearer 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'
                }
            })
            .then((response) => {
                console.log('Response from server', response.data)
                setCurrentApiResponse(response.data.text);
                setPreviousApiResponse(currentApiResponse);
                setIsFileUploaded(false)
                setAnimationKey((prevKey) => prevKey + 1);
            })
            .catch(error => {
                console.log('API ERROR: ', error)
            })
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center w-full'>
                <label htmlFor="dropzone-file" 
                className="flex flex-col items-center justify-center w-96 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input 
                    onChange={handleFileChange}
                    accept=".wav, .mp4, .mp3, .webm, .avi" 
                    id="dropzone-file" 
                    type="file" 
                    className="hidden" />
                </label>
            </div>
            <div className="flex justify-center mt-5">
                <button 
                onClick={handleUpload}
                className="inline-flex items-center rounded-md bg-sky-600 px-20 py-5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                    Transcribe
                </button>
            </div>
            <div className="w-max mt-5 ml-5">
                <p className="text-gray-300">{previousApiResponse}</p>
                {previousApiResponse && <p className="animate-typing text-gray-600">. . / / . / / </p>}
                <p key={animationKey} className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-gray-600 pr-5 text-1xl text-gray-600 font-bold">
                    {currentApiResponse}
                </p>
            </div>
            <div className='w-48 mt-5 ml-5'>
                {isfileUploaded &&
                    <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-gray-600 text-1xl text-gray-800 font-bold">
                        File has been uploaded
                    </p>
                }
            </div>
        </div>
    );
};

export default UploadFile;