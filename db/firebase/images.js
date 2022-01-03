import { ref, set, onValue } from "firebase/database";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { firestore } from './config.js';

const writeImgURL = (imageUrl) => {

  addDoc(collection(firestore, 'images'), {
    url: imageUrl,
  })
    .then((res) => console.log('data saved', res))
    .catch(err => console.log(err));

};

const readImgURL = async (callback) => {

  const urls = [];

  const images = await getDocs(collection(firestore, 'images'));


  images.forEach((doc) => {

    if (doc.data().url.length > 0) {
      urls.push(doc.data().url);
    }
  })

  callback(urls);
}

export { writeImgURL, readImgURL };