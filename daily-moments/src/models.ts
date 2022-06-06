// import firebase from "firebase/app";

export interface Entry {
  id: string;
  date: string;
  title: string;
  pictureUrl: string;
  description: string;
}

export const ENTRIES: Entry[] = Array.from({ length: 3 }, (_, i) => ({
  id: i.toString(),
  date: new Date().toISOString(),
  title: `${i}_title`,
  pictureUrl: "",
  description: "",
}));

// export function toEntry(doc: firebase.firestore.DocumentSnapshot): Entry {
//   return { id: doc.id, ...doc.data() } as Entry;
// }
