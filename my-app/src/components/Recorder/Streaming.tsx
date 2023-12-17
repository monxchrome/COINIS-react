import { useCallback, useRef, useState } from "react";
import axios from 'axios';

const Streaming = () => {
    const [recording, setRecording] = useState(false);
    const [currentApiResponse, setCurrentApiResponse] = useState(null);
    const [previousApiResponse, setPreviousApiResponse] = useState(null);
    const [animationKey, setAnimationKey] = useState(0);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    const startRecording = useCallback(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            //@ts-ignore
            mediaRecorderRef.current = mediaRecorder;
    
            mediaRecorder.ondataavailable = (e) => {
              if (e.data.size > 0) {
                //@ts-ignore
                chunksRef.current.push(e.data);
              }
            };
    
            mediaRecorder.onstop = () => {
              const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
    
              const formData = new FormData();
              formData.append('file', audioBlob);
              formData.append('model', 'whisper-1');
    
              //@ts-ignore
              axios.post(process.env.REACT_APP_OPENAI_API, formData, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
                }
              })
                .then((response) => {
                  console.log('Ответ от сервера:', response.data);
                  setCurrentApiResponse(response.data.text);
                  setPreviousApiResponse(currentApiResponse);
                  setAnimationKey((prevKey) => prevKey + 1);
                })
                .catch((error) => {
                  console.error('Ошибка при отправке на сервер:', error);
                });
    
              chunksRef.current = [];
            };
    
            mediaRecorder.start();
            setRecording(true);
          })
          .catch((error) => {
            console.error('Ошибка при доступе к микрофону:', error);
          });
      }, [currentApiResponse]);

      const stopRecording = useCallback(() => {
        //@ts-ignore
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            //@ts-ignore
          mediaRecorderRef.current.stop();
          setRecording(false);
        }
      }, []);
    
    const toggleRecording = useCallback(() => {
        if (recording) {
          stopRecording();
        } else {
          startRecording();
        }
      }, [recording, startRecording, stopRecording]);

    return (
        <div className="">
            <div className="flex justify-center">
                <button 
                onClick={toggleRecording}
                className="inline-flex items-center rounded-md bg-sky-600 px-20 py-5 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                    {recording ? "Stop Recording" : "Start Recording"}
                </button>
            </div>
            <div className="w-max mt-5 ml-5 max-w-full">
                <p className="text-gray-300">{previousApiResponse}</p>
                {previousApiResponse && <p className="animate-typing text-gray-600">. . / / . / / </p>}
                <p key={animationKey} className="animate-typing border-r-2 border-r-gray-600 pr-5 text-1xl text-gray-600 font-bold" style={{ whiteSpace: 'pre-wrap' }}>
                    {currentApiResponse}
                </p>
            </div>
        </div>
    );
};

export default Streaming;