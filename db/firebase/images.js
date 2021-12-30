import { ref, set, onValue } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from './config.js';

const writeImgURL = (imageUrl) => {

 addDoc(collection(firestore, 'images'), {
   url: imageUrl,
 })
 .then((res) => console.log('data saved', res))
 .catch(err => console.log(err));

};

const readImgURL = () => {
  const imgRef = ref(firestore, 'images');

  onValue(imgRef, (snap) => {
    const data = snap.val();

  })
}

export default writeImgURL;