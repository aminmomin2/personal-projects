// Import required Firebase Authentication and Firestore methods
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  where, 
  serverTimestamp, 
  orderBy, 
  doc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";

// Importing React Router and React Icons for navigation and UI elements
import { Link, useNavigate } from "react-router";
import { IoIosSettings, IoIosLogOut } from "react-icons/io";
import { AiOutlineEnter } from "react-icons/ai";

// Import React hooks for state management and Goal component
import { useEffect, useState, useRef } from "react";
import Goal from "../components/Goal"; // Custom component for displaying individual goals

// Main component for the Home page
export default function Home() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const user = auth.currentUser;

  // State variables
  const [quote, setQuote] = useState({}); // Holds the fetched motivational quote
  const [formattedDate, setFormattedDate] = useState(""); // Formatted string of the current date
  const [goals, setGoals] = useState([]); // Array of goals fetched from Firestore
  const [numGoal, setNumGoal] = useState(0); // Tracks number of goals, used for triggering updates
  
  // Effect to set up the current date and fetch an initial quote
  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Intl.DateTimeFormat('en-US', options).format(today);
    setFormattedDate(currentDate);

    fetchNewQuote();
  }, [])

  // Fetches a new motivational quote from the API
  function fetchNewQuote() {
    fetch("https://personal-projects-nu-five.vercel.app/quote")
      .then((res) => res.json())
      .then((data) => {
        const newQuote = {
          q: data.q,
          a: data.a
        };
        // Update state with the new quote
        setQuote(newQuote);
      })
      .catch((error) => console.error("Error fetching quote: ", error));
  }

  // Fetches new motivational quote on click
  function handleQuoteClick() {
    fetchNewQuote();
  }

  // Handles user logout
  async function handleLogout() {
    try {
      await signOut(auth);
      setGoals([]); // Clear goals from state
      navigate("/login", { replace: true });
    } catch(error) {
      console.error("Error logging out:", error);
    }
  }

  // Handles form submission to add a new goal
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const goal = formData.get("goal");

    if (!goal.trim()) return;

    addDoc(collection(db, "goals"), { 
      goal: goal,
      uid: user.uid,
      crossOut: false,
      createdAt: serverTimestamp()
    })
      .then(() => {
        if(inputRef.current) {
          inputRef.current.value = "";
        }
        setNumGoal((prev) => prev + 1); // Increment goal count to trigger updates
      })
      .catch((error) => {
        console.error("Error adding goal: ", error);
      })
  }

  // Toggles the crossed-out state of a goal
  async function toggleCrossOut(goalId, currentState) {
    const goalRef = doc(db, "goals", goalId);
    try {
      await updateDoc(goalRef, { crossOut: !currentState });
    } catch (error) {
      console.error("Error toggling cross-out state:", error);
    }
  }

  // Deletes a goal from Firestore
  async function toggleDelete(goalId) {
    const goalRef = doc(db, "goals", goalId);
    try {
      await deleteDoc(goalRef);
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  }

  // Effect to fetch goals from Firestore whenever the user or numGoal changes
  useEffect(() => {
    if (!user) {
      setGoals([]); // Clear goals if no user is authenticated
      return;
    }

    // Query to fetch goals for the current user, ordered by crossOut and creation time
    const goalsRef = collection(db, "goals");
    const q = query(goalsRef, where("uid", "==", user.uid), orderBy("crossOut", "asc"), orderBy("createdAt"));

    const unsub = onSnapshot(q, (snapShot) => {
      // Update goals state with the fetched data
      setGoals(snapShot.docs.map(doc => ({...doc.data(), id: doc.id})));
    })

    return () => unsub();
  }, [numGoal, user]);

  // Render individual goal elements
  const goalElements = goals.map((goal) => (
    <Goal 
      key={goal.id} 
      goal={goal.goal} 
      isCrossedOut={goal.crossOut} 
      toggleCrossOut={() => toggleCrossOut(goal.id, goal.crossOut)}
      toggleDelete={() => toggleDelete(goal.id)}
    />
  ));
  
  // Render the Home component
  return (
    <div className="home-container">
      <nav className="nav-bar">
        <div className="name-date">
          <h1 className="name">{user.displayName ? `Hello ${user.displayName.split(" ")[0]}` : "Hello Friend"}</h1>
          <p className="date">{formattedDate}</p>
        </div>
        <div className="options">
          <button className="logout" onClick={handleLogout}>
              <IoIosLogOut />
          </button>
          <Link to={'/settings'}>
            <IoIosSettings className="settings"/>
          </Link>
        </div>
      </nav>
      <p className="quote" onClick={handleQuoteClick} style={{cursor: "pointer"}}>
        {quote.q}
        <span className="quote-footer">- {quote.a}</span>
      </p>
      <form
        className="goal-form"
        method="post"
        replace="true"
        onSubmit={handleSubmit}
      >
        <div className="input-container">
          <input 
            className="add-goal" 
            placeholder="Add a task..."
            name="goal"
            type="text"
            ref={inputRef}
          />
          <button className="icon-button">
            <AiOutlineEnter className="enter-icon"/>
          </button>
        </div>
      </form>
      <div className="goal-container">
        {goalElements}
      </div>
    </div>
  )
}