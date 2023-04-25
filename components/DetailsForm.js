import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const DetailsForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    let name = userName;
    let age = userAge;
    let id = Math.random().toString();

    let details = {
      name,
      age,
      id
    };

    props.enteredDetails(details);
    setUserName("");
    setUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <form style={{ backgroundColor: "red" }} onSubmit={formSubmitHandler}>
        <div>
          <div>
            <label>Username: </label>
            <input type="text" value={userName} onChange={userNameHandler} />
          </div>
          <div>
            <label>Age(Years): </label>
            <input type="number" value={userAge} onChange={ageHandler} />
          </div>
        </div>
        <button type="submit" style={{ margin: "15px" }}>
          Add User
        </button>
      </form>
    </div>
  );
};
export default DetailsForm;
