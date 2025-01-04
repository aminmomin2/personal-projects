// Import necessary React hooks and Firebase authentication utilities
import { useEffect, useState } from "react";
import { auth } from "../firebase"; // Firebase authentication configuration
import { useNavigate } from "react-router";

// Functional component that displays a welcoming introduction
export default function Intro() {
  const user = auth.currentUser
  const navigate = useNavigate();

  // State variables
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Welcome Friend");

  // Effect to update the welcome message based on the user's display name
  useEffect(() => {
    if (user && user.displayName) {
      setFullText(`Welcome ${user.displayName}`);
    }
  }, [user]);

  // Effect to animate the text rendering and navigate to the home page after animation
  useEffect(() => {
    let index = 0;
    let isMounted = true;

    const interval = setInterval(() => {
      if (index <= fullText.length && isMounted) {
        setText((prev) => fullText.slice(0, index))
        index++;
      } else {
        clearInterval(interval);
        if (isMounted) {
          setTimeout(() => navigate("/", { replace: true }), 1000);
        }
      }
    }, 100);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [navigate, fullText]);

  // Render the intro text within a container
  return (
    <div className="intro-container">
      <div className="intro-text">{text || ""}</div>
    </div>
  );
}