import React, { useState, useEffect } from 'react';
import { auth, db } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

const Welcome = () => {
    const [user, setUser] = useState(null);
    const [photoURL, setPhotoURL] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
  
          try {
            const userDocRef = doc(db, 'users', currentUser.uid);
            const userDoc = await getDoc(userDocRef);
  
            if (userDoc.exists()) {
              const data = userDoc.data();
              setPhotoURL(data.photoURL || 'https://via.placeholder.com/150');
            } else {
              setPhotoURL('https://via.placeholder.com/150'); // Fallback
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            setPhotoURL('https://via.placeholder.com/150'); // Fallback
          }
          
          setLoading(false);
        } else {
          navigate('/');
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="welcome" style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
        <h1>Good to See You {user.displayName || 'User'}!</h1>
        <div
          style={{
            
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            width: '100px',
            margin: '0 auto',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={photoURL}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    );
  };
  

export default Welcome;
