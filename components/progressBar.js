import useStorage from '../hooks/useStorage.js';

const ProgressBar = ({file, setFile}) => {

  const { url, progress } = useStorage(file);
  console.log({url, progress});

  return (
    <div>progressBar is here</div>
  )
}

export default ProgressBar;