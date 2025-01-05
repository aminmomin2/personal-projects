import { Form, redirect, useNavigation, Link } from "react-router"
import { updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { HiXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

// Action function to handle form submission
export async function action({ request }) {
  const formData = await request.formData()
  const username = formData.get("username")
  try {
    await updateProfile(auth.currentUser, {displayName: username})
    return redirect("/")
  } catch(error) {
    return error.message
  }
}

// Main functional component for the Settings page
export default function Settings() {
  const user = auth.currentUser
  const navigation = useNavigation()

  // State variables
  const [backgroundColor, setBackgroundColor] = useState("#F3E9DD")
  const [username, setUsername] = useState("")

  // Effect to set the username input field with the current user's display name
  useEffect(() => {
    setUsername(user.displayName)
  }, [user])

  // Effect to load and apply the saved background color from localStorage
  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor")
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      document.documentElement.style.backgroundColor = savedColor;
      setBackgroundColor(savedColor)
    }
  }, [])

  // Function to change the background color and save it to localStorage
  function changeBackgroundColor(hexCode) {
    setBackgroundColor(hexCode)
    localStorage.setItem("backgroundColor", hexCode)
    document.documentElement.style.backgroundColor = hexCode
    document.body.style.backgroundColor = hexCode
  }

  return (
    <>
      <nav className="setting-nav">
        <Link to="/">
          <HiXMark className="exit"/>
        </Link>
      </nav>
      <Form method="post" className="change-username" replace>
        <div className="settings-container">
          <p>My Name</p>
          <input
            className="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="background-container">
          <span 
            className="background-color" 
            style={{
              backgroundColor: "#F3E9DD",
              border: backgroundColor === "#F3E9DD" ? "2px solid black" : "none",
            }} 
            onClick={() => changeBackgroundColor("#F3E9DD")}>
          </span>
          <span 
            className="background-color" 
            style={{
              backgroundColor: "#EDD8C9",
              border: backgroundColor === "#EDD8C9" ? "2px solid black" : "none",
            }} 
            onClick={() => changeBackgroundColor("#EDD8C9")}>
          </span>
          <span 
            className="background-color" 
            style={{
              backgroundColor: "#DAE2DE",
              border: backgroundColor === "#DAE2DE" ? "2px solid black" : "none",
            }} 
            onClick={() => changeBackgroundColor("#DAE2DE")}>
          </span>
          <span 
            className="background-color"
            style={{
              backgroundColor: "#E2ECF5",
              border: backgroundColor === "#E2ECF5" ? "2px solid black" : "none",
            }} 
            onClick={() => changeBackgroundColor("#E2ECF5")}>
          </span>
          <span 
            className="background-color" 
            style={{
              backgroundColor: "#E1E3F3",
              border: backgroundColor === "#E1E3F3" ? "2px solid black" : "none",
            }} 
            onClick={() => changeBackgroundColor("#E1E3F3")}>
          </span>
        </div>
        <button 
          type="submit" 
          className="save-button"
          disabled={navigation.status === "submitting"}
          name="actionType"
          value="save"
        >
          Save
        </button>
      </Form>
    </>
  )
}