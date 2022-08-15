import React, { useState } from "react";
import "../moive_form/moive_form.css";
const MoiveForm = (props) => {
  const { movies, setMovies } = props;
  const [movieObj, setMoiveObj] = useState({  //take empty object for input
    name: "",
    rate: 0,
    duration: "",
  });
  const [errorObj, setErrorObj] = useState({});

  const handleInput = (e) => {                 // function for input handle
    console.log("askasjaskj", e.target.name);
    switch (e.target.name) {
      case "name":
        setMoiveObj((movieObj) => ({ ...movieObj, name: e.target.value }));
        break;
      case "rate":
        setMoiveObj((movieObj) => ({ ...movieObj, rate: e.target.value }));
        break;
      case "duration": {
        setMoiveObj((movieObj) => ({ ...movieObj, duration: e.target.value }));
        break;
      }
      default:
        return null;
    }
  };

  const handleValidation = () => {       // function for validation
    if (movieObj.name === "") {
      {
        setErrorObj((errorObj) => ({
          ...errorObj,
          nameError: " name is  empty",
        }));
      }
    } else if (movieObj.rate > 100) {
      {
        setErrorObj((errorObj) => ({
          ...errorObj,
          rateError: " got error",
        }));
      }
    } else if (
      movieObj.duration.charAt(movieObj.duration.length - 1).toLowerCase() !==
        "h" &&
      movieObj.duration.charAt(movieObj.duration.length - 1).toLowerCase() !==
        "m"
    ) {
      {
        setErrorObj((errorObj) => ({
          ...errorObj,
          durationError: "duration got error",
        }));
      }
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {        //function for submit on button
    e.preventDefault();

    if (handleValidation()) {
      setMovies((movies) => [...movies, movieObj]);
      setMoiveObj({ name: "", rate: "", duration: "" });
      setErrorObj("");
    }
  };

  return (
    <div className="moiveform border border-2">
      <form>
        <div className="mb-1 ">
          <label for="name" className="form-label">
            Moive Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={movieObj.name}
            placeholder="Enter Moive Name"
            onChange={(e) => handleInput(e)}
          />
          <span>{errorObj?.nameError}</span>
        </div>
        <div className="mb-3">
          <label for="rating" className="form-label">
            Ratings
          </label>
          <input
            type="Number"
            className="form-control "
            name="rate"
            value={movieObj.rate}
            placeholder="Enter Moive Rating"
            onChange={(e) => handleInput(e)}
          />
          <span>{errorObj?.rateError}</span>
        </div>
        <div className="mb-3">
          <label for="duration" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control "
            name="duration"
            value={movieObj.duration}
            placeholder="Enter Moive Duration"
            onChange={(e) => handleInput(e)}
          />
          <span>{errorObj?.durationError}</span>
        </div>
        <button
          type="submit"
          className="btn btn-success btn-lg  "
          onClick={(e) => handleSubmit(e)}
        >
          Add Moive
        </button>
      </form>
    </div>
  );
};

export default MoiveForm;
