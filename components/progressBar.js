import useStorage from '../hooks/useStorage.js';
import { useState, useEffect } from 'react';

const ProgressBar = ({file, setFile, setURL, setShow}) => {

  const { url, progress } = useStorage(file);

  useEffect(() => {
    if(url) {
      setFile(null);
      setURL(url);
      setShow(true);
    }
  }, [url]);

  return (
    <div>
      <p>Putting on Pantyhose {Math.floor(progress)}%</p>
    </div>
  )
}

export default ProgressBar;