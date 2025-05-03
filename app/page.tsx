"use client"

import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export default function Home() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User:', result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Next.js + Google Sign-In</h1>
      <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
    </main>
  );
}
