// import { data } from "../data.js";
import data from "../serialized_data.js";

import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const populateFirebase = async () => {
  let firebaseSamples = data.samples.map((s) => ({
    id: s.id,
    title: s.title,
    likes: 0,
    love: 0,
    dislikes: 0,
  }));

  let counter = 0;
  let newSample = firebaseSamples[firebaseSamples.length - 1];
  firebaseSamples.forEach(async (sample) => {
    try {
      const docRef = await addDoc(collection(db, "portfolio-sample"), {
        sampleId: sample.id,
        likes: sample.likes,
        dislikes: sample.dislikes,
        love: sample.love,
        title: sample.title,
      });
      // const commentDocRef = await addDoc(collection(db,"samples-comments"),{

      // })
      // console.log("Document written with ID: ", docRef.id);
      counter++;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
  console.log(counter + " successful insertions into firebase were made!");
};

export const addNewSample = async () => {
  let firebaseSamples = data.samples.map((s) => ({
    id: s.id,
    title: s.title,
    likes: 0,
    love: 0,
    dislikes: 0,
  }));

  let newSample = firebaseSamples[firebaseSamples.length - 1];

  try {
    const docRef = await addDoc(collection(db, "portfolio-sample"), {
      sampleId: newSample.id,
      likes: newSample.likes,
      dislikes: newSample.dislikes,
      love: newSample.love,
      title: newSample.title,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  console.log(newSample.title + " was added to firebase.");
};
