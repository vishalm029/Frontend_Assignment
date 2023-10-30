import React, { useState, useEffect } from "react";
import DisplayOptions from "./DisplayOptions";
import Ticket from "./Ticket";
import "./styles.css";
// import './drop.css' // Import your CSS file

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [groupOption, setGroupOption] = useState("status");
  const [sortOption, setSortOption] = useState("priority");
  const [selectedTickets, setSelectedTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) =>
        setTickets(
          data.tickets.map((ticket) => ({ ...ticket, selected: false }))
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const groupedAndSortedTickets = () => {
    // Implement logic based on groupOption and sortOption
    let sortedTickets = [...tickets];

    if (groupOption === "status") {
      // Group by status
      sortedTickets = sortedTickets.reduce((grouped, ticket) => {
        const status = ticket.status;
        grouped[status] = [...(grouped[status] || []), ticket];
        return grouped;
      }, {});
    } else if (groupOption === "user") {
      // Group by user
      sortedTickets = sortedTickets.reduce((grouped, ticket) => {
        const user = ticket.userId;
        grouped[user] = [...(grouped[user] || []), ticket];
        return grouped;
      }, {});
    } else if (groupOption === "priority") {
      // Group by priority
      sortedTickets = sortedTickets.reduce((grouped, ticket) => {
        const priority = ticket.priority;
        grouped[priority] = [...(grouped[priority] || []), ticket];
        return grouped;
      }, {});
    }

    // Sort based on sortOption
    if (sortOption === "priority") {
      sortedTickets = Object.entries(sortedTickets).sort(([a], [b]) => b - a);
    } else if (sortOption === "title") {
      sortedTickets = Object.entries(sortedTickets).sort(([a], [b]) =>
        a.localeCompare(b)
      );
    }

    // Filter selected tickets
    const filteredTickets = tickets.filter((ticket) =>
      selectedTickets.includes(ticket.id)
    );

    return sortedTickets.concat(filteredTickets);
  };

  const handleCheckboxChange = (ticketId) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId
        ? { ...ticket, selected: !ticket.selected }
        : ticket
    );

    setSelectedTickets(
      updatedTickets.filter((ticket) => ticket.selected === true)
    );
    setTickets(updatedTickets);
  };

  return (
    <div>
      <DisplayOptions
        groupOption={groupOption}
        setGroupOption={setGroupOption}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <div className="kanban-board">
        {groupedAndSortedTickets().map(([key, group]) => (
          <div key={key}>
            <h2>{key}</h2>
            {group.map((ticket) => (
              <Ticket
                key={ticket.id}
                {...ticket}
                onSelect={handleCheckboxChange}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
