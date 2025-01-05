import './styles.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router"
import Login, { action as loginAction } from './pages/Login';
import Layout from './components/Layout';
import Home from './pages/Home';
import Settings, { action as settingsAction } from './pages/Settings';
import Intro from './pages/Intro';

// Define the application's routes using React Router
const router = createBrowserRouter(createRoutesFromElements(
  <>
    {/* Route for the Login page */}
    <Route 
      path="/login" 
      element={<Login />}
      action={loginAction}
    />

    {/* Nested routes under the main Layout */}
    <Route path="/" element={<Layout />}>

      {/* Default (index) route renders the Home page */}
      <Route 
        index 
        element={<Home />}
      />

      {/* Route for the Intro page */}
      <Route path='/intro' element={<Intro />} />

      {/* Route for the Settings page */}
      <Route 
        path="settings" 
        element={<Settings />} 
        action={settingsAction}
      />
    </Route>
  </>
))

// Main App component
function App() {
  return (
    // Provide the routing context to the entire application
    <RouterProvider router={router}/>
  );
}

export default App;
