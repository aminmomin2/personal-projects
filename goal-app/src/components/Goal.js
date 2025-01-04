// Importing React Icons for navigation and UI elements
import { FaXmark } from "react-icons/fa6";

// Component that displays a goal item with a checkbox to mark it as completed and a delete button.
export default function Goal(props) {
  return (
    <>
      <div className="goal-item">
        <label className="styled-container">
          <input
            type="checkbox"
            className="styled-checkbox"
            checked={props.isCrossedOut}
            onChange={props.toggleCrossOut}
          />
          <span className="styled-checkmark"></span>
          <span className="styled-text">{props.goal}</span>
        </label>
        <FaXmark className="delete-goal" onClick={props.toggleDelete}/>
      </div>
      <style>
        {props.isCrossedOut &&
          `.styled-checkbox:checked + .styled-checkmark + .styled-text {
            text-decoration: line-through;
            color: #777;
          }`}
      </style>
    </>
  );
}
