import React, { useState } from "react";

const DisplayOptions = ({
  groupOption,
  setGroupOption,
  sortOption,
  setSortOption
}) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  return (
    <div className="display-options">
      <button class="button" onClick={() => setOptionsVisible(!optionsVisible)}>
        <span> Display Options </span>
      </button>
      {optionsVisible && (
        <div>
          <label>
            Grouping : 
            <select
              value={groupOption}
              onChange={(e) => setGroupOption(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </label>

          <label>
            Ordering : 
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default DisplayOptions;
