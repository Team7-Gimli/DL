import { useState, useEffect } from 'react';
import { imageStorage, firestore } from '../db/firebase/config.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import writeImgURL from '../db/firebase/images.js';


const useStorage = (file) => {

  const [progress, setProgress] = useState(null);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  const saveImg = () => {
    //references
    const imgRef = ref(imageStorage, file.name);

    const uploadTask = uploadBytesResumable(imgRef, file);
    uploadTask.on('state_changed', (snap) => {
      let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(precentage);
    }, (error) => {
      setErr(error)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then(url => {
          setUrl(url);
        })
        .catch(error => console.log(error));
    });
  }

  useEffect(saveImg, [file]);

  return { progress, url, err };
}

export default useStorage;