import { useState } from "react";

export default function DestinationForm(props) {
  const [input, setInput] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    //function call:  to the function sent as a prop inside Search
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      name: input,
      date: inputDate,
      time: inputTime,
    });

    //Empty out the search bar after submission
    setInput("");
    setInputDate("");
    setInputTime("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-fields-container">
          <input
            type="text"
            name="destination"
            className="input-field"
            placeholder="City, State"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="date"
            name="destination"
            className="input-field"
            placeholder="Pick a Date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <input
            type="time"
            name="destination"
            className="input-field"
            placeholder="Time you start your journey"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
          />
        </div>

        <button className="add-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
