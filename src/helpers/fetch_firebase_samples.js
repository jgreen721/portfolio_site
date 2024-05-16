import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetch_all_samples_from_firebase = async () => {
  const querySnapshot = await getDocs(collection(db, "portfolio-sample"));
  let cleanData = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    cleanData.push({
      sampleId: doc.data().sampleId,
      likes: doc.data().likes,
      dislikes: doc.data().dislikes,
      love: doc.data().love,
    });
  });
  // console.log(cleanData);
  return cleanData;
};

export const fetch_all_comments_from_firebase = async () => {
  const querySnapshot = await getDocs(collection(db, "portfolio-comments"));
  let cleanData = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    cleanData.push({
      sampleId: doc.data().sampleId,
      comment: doc.data().comment,
      from: doc.data().from,
      avatar: doc.data().avatar,
    });
  });
  // console.log(cleanData);
  return cleanData;
};
