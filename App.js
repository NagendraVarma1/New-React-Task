
import DetailsForm from "./components/DetailsForm";
import DetailsList from "./components/DetailsList";
import React,{useState} from "react";

const Details = [];
function App() {
  const [allDetails, setAllDetails] = useState(Details)
  

  const addNewEnteredDetails = (details) => {
    setAllDetails((prevDetails) => {
      return [details, ...prevDetails];
    })
  }
  return (
    <div>
      <h2>User Details Form</h2>
      <DetailsForm enteredDetails={addNewEnteredDetails}/>
      <DetailsList list={allDetails}/>
    </div>
  );
}

export default App;
