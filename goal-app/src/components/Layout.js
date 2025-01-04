
// Importing React Router and React Icons for UI elements and Firebase Authentication
import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"

// Layout wrapper for route-based authentication.
export default function Layout() {

  // State to track the user's authentication status.
  // `null` means the authentication state is still loading.
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Get the Firebase authentication instance.
  const auth = getAuth();

  // useEffect hook to listen for changes in the authentication state.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Update authentication state
    });

  }, [auth]); // Dependency array ensures this effect runs only when the `auth` instance changes

  // While the authentication status is loading, show a loading message.
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Render the appropriate content based on the authentication status.
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
  )
}