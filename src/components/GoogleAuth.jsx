import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';

const GoogleAuth = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));

      navigate('/company-dashboard');
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Sign in with Google</h3>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleAuth;
