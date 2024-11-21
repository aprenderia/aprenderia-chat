'use client';

import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { initializeAnalytics } from '@/config/firebase';

const FirebaseProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // Initialize Firebase Analytics
    const init = async () => {
      try {
        await initializeAnalytics();
      } catch (error) {
        console.error('Failed to initialize Firebase:', error);
      }
    };

    init();
  }, []);

  return children;
};

export default FirebaseProvider;
