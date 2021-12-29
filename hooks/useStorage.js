import { useState, useEffect } from 'react';
import { imageStorage } from '../db/firebase/config.js';
import { ref, uploadBytes } from 'firebase/storage';


const useStorage = (file) => {

  const [progress, setProgress] = useState(null);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  const saveImg = () => {
    //references
    const imgRef = ref(imageStorage, file.name);

    uploadBytes(imgRef, file)
      .then( async snap => {
        console.log('upload bolb');
        let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(precentage);
      })
      .catch(error => setErr(error))

    // imgRef.put(file).on('state_changed', (snap) => {
    //   let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //   setProgress(precentage);
    // }, (error) => {
    //   setErr(error);
    // }, async () => {
    //   const url = await imgRef.getDownloadURL();
    //   setUrl(url);
    // })
  }

  useEffect(saveImg, [file]);

  return { progress, url, err };
}

export default useStorage;