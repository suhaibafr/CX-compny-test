import "../moive_list/moive_list.css";
import React, { useState } from "react";

const MoiveList = (props) => {
  const { movies } = props;
  const [query, setSerachQuery] = useState("");
  const calculateDuration = (duration) => {
    if (duration.charAt(duration.length - 1).toLowerCase() === "m") {
      duration = duration.substring(0, duration.length - 1);
      return duration / 60 + "Hrs";
    } else {
      duration = duration.substring(0, duration.length - 1);
      return duration + "Hrs";
    }
  };
  return (
    <>
      <div className="group">
        <div className="form-outline">
          <input
            id="search-input"
            type="search"
            className="form-control"
            placeholder="Search Moive By Name"
            value={query}
            onChange={(e) => {
              setSerachQuery(e.target.value);
            }}
          />
        </div>
        {movies
          ?.filter((movie) => movie.name.toLowerCase().includes(query)) // iteration with .map
          .map((eachMovie) => {
            return (
              <div class="card">
                <div class="container  border-end border-success">
                  <h4>
                    <b>{eachMovie.name}</b>
                  </h4>
                  <div className="wrapflex">
                    <div className="duration">
                      <p>Ratings:{eachMovie.rate}/100</p>
                    </div>
                    <div className="hour">
                      <p>{calculateDuration(eachMovie.duration)}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MoiveList;
