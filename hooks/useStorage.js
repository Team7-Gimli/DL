import {useState, useEffect} from 'react';
import imageStorage from '../db/firebase/config.js';


const useStorage = (file) => {

  const [progress, setProgress] = useState (null);
  const [err, setErr] = useState (null);
  const [url, setUrl] = useState (null);

  const saveImg = () => {
    //references
    const imgRef = imageStorage.ref(file.name);
    imgRef.put(file).on('state_changed', (snap) => {
      let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(precentage);
    }, (error) => {
      setErr(error);
    }, async () => {
      const url = await imgRef.getDownloadURL();
      setUrl(url);
    } )
  }

  useEffect( saveImg , [file]);

  return {progress, url, err};
}

export default useStorage;