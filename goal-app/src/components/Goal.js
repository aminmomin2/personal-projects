// Importing React Icons for navigation and UI elements
import { FaXmark } from "react-icons/fa6";

// Component that displays a goal item with a checkbox to mark it as completed and a delete button.
export default function Goal(props) {
  return (
    <>
      <div className={`goal-item ${props.isCrossedOut ? "crossed-out" : ""}`}>
        <label className="styled-container">
          <input
            type="checkbox"
            className="styled-checkbox"
            checked={props.isCrossedOut}
            onChange={props.toggleCrossOut}
          />
          <span className="styled-text">{props.goal}</span>
        </label>
        <FaXmark className="delete-goal" onClick={props.toggleDelete}/>
      </div>
    </>
  );
}
