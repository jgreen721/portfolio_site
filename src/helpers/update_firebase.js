import { db } from "../firebase.js";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

export const update_comments = async (commentObj) => {
  try {
    const docRef = await addDoc(
      collection(db, "portfolio-comments"),
      commentObj
    );

    return { status: 200 };
  } catch (e) {
    console.log("Error in updating comments");
    return { status: 500 };
  }
};

export const update_reactions = async (action, sampleId) => {
  // console.log(sampleId, action);
  try {
    let docId;
    let tempTracker;
    //find instance
    const querySnapshot = await getDocs(
      query(
        collection(db, "portfolio-sample"),
        where("sampleId", "==", sampleId)
      )
    );
    //get values
    querySnapshot.forEach((doc) => {
      docId = doc.id;
      tempTracker = doc.data()[action];
    });

    //get docRef
    const docRef = doc(db, "portfolio-sample", docId);

    //update
    tempTracker++;
    await updateDoc(docRef, {
      [action]: tempTracker,
    });
    // console.log("successful update");
    return { status: 200, newValue: tempTracker };
  } catch (e) {
    console.log("Error with upating reaction to worksample", e);
    return { status: 500 };
  }
};
