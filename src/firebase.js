import "./App.css";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabse, ref, set } from "firebase/database";
import { uesState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAeqCUpNaSn4_ZtPfcSnbkegiPYWXBNiqg",
  authDomain: "twitter-40079.firebaseapp.com",
  databaseURL: "https://twitter-40079-default-rtdb.firebaseio.com",
  projectId: "twitter-40079",
  storageBucket: "twitter-40079.appspot.com",
  messagingSenderId: "464763967860",
  appId: "1:464763967860:web:1eb41465ee78808c247421",
  measurementId: "G-RFD4XT6HT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase();



function App(){
  const [imageUpload, setImageUpload] = useState(null);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef =  ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  return (
    <div>
      <input type="file" onChange = {
        (event) => {setImageUpload(event.target.files[0])}} />
      <button onClick={uploadImage}> Upload Image</button>
    </div>
  )
}
export const storage = getStorage(app);

const reference  = ref(db, 'users/' + userId);

set(reference, {
  profile: "https://i.ytimg.com/vi/7McFq0V5wn4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEgoQjAP&rs=AOn4CLAIOAPbEfjw4JbRmAwd341g7X_KpA"
});

//How to take in image from database:
response.items.forEach((item) => { 
  getDownloadURL(item).then(() => {
    setImageList((prev) => [...prev, url]);
  });
});

