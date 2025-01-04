// Import Firebase Authentication methods for email/password and Google sign-in
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithPopup} from "firebase/auth"
import { auth } from "../firebase"
import { useEffect } from "react"
import { Form, useActionData, useNavigate, useNavigation } from "react-router"
import { FaUser, FaLock } from "react-icons/fa"

// Initialize a Google Auth Provider for Google sign-in
const provider = new GoogleAuthProvider()

// Handles the form actions for login, account creation, and Google sign-in
export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const actionType = formData.get("actionType")
  try {
    if (actionType === "createAccount") {
      await createUserWithEmailAndPassword(auth, email, password)
    } else if (actionType === "login") {
      await signInWithEmailAndPassword(auth, email, password)
    } else if (actionType === "signInWithGoogle") {
      await signInWithPopup(auth, provider)
    }
  } catch (error) {
    return error.message || "Invalid email or password"
  }
}

// Functional component for the login page
export default function Login() {
  const errorMessage = useActionData()
  const navigation = useNavigation()
  const navigate = useNavigate()
  const formData = navigation.formData
  const actionType = formData ? formData.get("actionType") : null

  // Define default and error styles for the input fields
  const defaultStyle = { border: "2px solid #6D9CE4" };
  const errorStyle = { border: "2px solid #E47B6D" };

  // Effect to monitor authentication state and redirect to the intro page if logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/intro", {replace: true})
      }
    })
  }, [navigate])

  // Render the login form and related UI
  return (
    <div className="login-container">
      <h1>Sign into your account</h1>
      {errorMessage && <h3 className="error">{errorMessage}</h3>}
      <Form
        method="post"
        className="login-form"
        replace
      >
        <div className="input-box">
          <input 
            name="email"
            type="email"
            placeholder="Email Address"
            style={errorMessage ? errorStyle : defaultStyle}
          />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input 
            name="password"
            type="password"
            placeholder="Password"
            style={errorMessage ? errorStyle : defaultStyle}
          />
          <FaLock className="icon"/>
        </div>
        <button
          disabled={navigation.status === "submitting"}
          name="actionType"
          value="login"
        >
          {navigation.state === "submitting" && actionType === "login"
            ? "Logging in..."
            : "Log in"
          }
        </button>
        <button
          disabled={navigation.status === "submitting"}
          name="actionType"
          value="createAccount"
        >
          {navigation.state === "submitting" && actionType === "createAccount"
            ? "Creating Account..."
            : "Create Account"
          }
        </button>
        <button 
          className="gsi-material-button"
          disabled={navigation.status === "submitting"}
          name="actionType"
          value="signInWithGoogle"
        >
          <div className="gsi-material-button-state"></div>
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className="gsi-material-button-contents">Continue with Google</span>
            <span style={{display: "none"}}>Continue with Google</span>
          </div>
        </button>
      </Form>
    </div>
  )
}