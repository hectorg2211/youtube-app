import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(search);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="video-input">Search for a Video</label>
          <input
            type="text"
            id="video-input"
            placeholder="Search for a video"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
