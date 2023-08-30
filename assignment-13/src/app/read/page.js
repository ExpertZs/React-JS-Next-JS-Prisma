"use client";
import { useEffect, useState } from 'react';

const UserPreference = () => {
  const [themePreference, setThemePreference] = useState('');

  useEffect(() => {
    async function fetchUserPreference() {
      try {
        const response = await fetch('/api/cookie/get');
        if (response.ok) {
          const data = await response.json();
          setThemePreference(data.theme);
        } else {
          console.error('Failed to fetch user preference.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchUserPreference();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <p>User's Theme Preference: {themePreference}</p>
    </div>
  );
};

export default UserPreference;
