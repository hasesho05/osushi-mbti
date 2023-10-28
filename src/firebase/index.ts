import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

// 匿名認証関数
export const authenticateAnonymously = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
// 結果の保存関数
export const saveResults = async (
  personality: string,
  typeScores: { [type: string]: number }
) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const docRef = collection(db, 'results');

      const docSnapshot = await addDoc(docRef, {
        userId: user.uid,
        personality,
        typeScores,
      });

      // ドキュメントのIDを返す
      return docSnapshot.id;
    } else {
      // ユーザーが認証されていない場合
      throw new Error('User not authenticated');
    }
  } catch (error) {
    throw error;
  }
};

// 問い合わせの保存関数
export const saveContact = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const docRef = await addDoc(collection(db, 'contacts'), {
        userId: user.uid,
        name,
        email,
        message,
      });

      // ドキュメントのIDを返す
      return docRef.id;
    } else {
      // ユーザーが認証されていない場合
      throw new Error('User not authenticated');
    }
  } catch (error) {
    throw error;
  }
};
