import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDMEIfGrde_uzFue98Eb6wt-OYthVeSw6c",
  appId: "1:431681035458:web:a8ac26dda0315716a02f5b",
  authDomain: "ai-models-4c269.firebaseapp.com",
  measurementId: "G-NL7WY118TK",
  messagingSenderId: "431681035458",
  projectId: "ai-models-4c269",
  storageBucket: "ai-models-4c269.firebasestorage.app"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics and export it
export const initializeAnalytics = async () => {
  try {
    // Check if analytics is supported (won't work in SSR)
    if (await isSupported()) {
      return getAnalytics(firebaseApp);
    }
    return null;
  } catch (error) {
    console.error('Error initializing analytics:', error);
    return null;
  }
};
