// import React, { useState } from "react";

// const Ticket = ({
//   id,
//   title,
//   tag,
//   userId,
//   status,
//   priority,
//   selected,
//   onSelect
// }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className={`ticket ${showDetails ? "expanded" : ""}`}>
//       <div className="ticket-header">
//         <input
//           type="checkbox"
//           checked={selected}
//           onChange={() => onSelect(id)}
//           className="checkbox"
//         />
//         <h3>{title}</h3>
//         <button className="dropdown-button" onClick={toggleDetails}>
//           &#8942;
//         </button>
//       </div>

//       {showDetails && (
//         <div className="ticket-details">
//           <p>ID: {id}</p>
//           <p>User: {userId}</p>
//           <p>Status: {status}</p>
//           <p>Priority: {priority}</p>
//           <p>Tags: {tag.join(", ")}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ticket;
// Ticket.js
import React, { useState } from 'react';
import "./styles.css"

const Ticket = ({ id, title, tag, userId, status, priority, selected, onSelect }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`ticket ${showDetails ? 'expanded' : ''}`}>
      <div className="ticket-header">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(id)}
          className="checkbox"
        />
        <h3>{title}</h3>
        <button className="dropdown-button" onClick={toggleDetails}>
          &#8942;
        </button>
      </div>

      {showDetails && (
        <div className="ticket-details">
          <p>ID: {id}</p>
          <p>User: {userId}</p>
          <p>Status: {status}</p>
          <p>Priority: {priority}</p>
          <p>Tags: {tag.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Ticket;
