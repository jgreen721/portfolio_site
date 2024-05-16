// import { data } from "../data.js";
import data from "../serialized_data.js";

import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const populateFirebase = async () => {
  // let allSamples = [];
  // data.samples.forEach((section) => {
  //   let desiredSampleData = section.samples.map((s) => ({
  //     id: s.id,
  //     title: s.title,
  //     likes: 0,
  //     love: 0,
  //     dislikes: 0,
  //   }));
  //   allSamples = [...allSamples, ...desiredSampleData];
  // });
  let firebaseSamples = data.samples.map((s) => ({
    id: s.id,
    title: s.title,
    likes: 0,
    love: 0,
    dislikes: 0,
  }));
  // console.log(allSamples);
  // console.log(allSamples.length);
  let counter = 0;

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
