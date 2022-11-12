import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function SearchForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //function call:  to the function sent as a prop inside Search
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      name: input,
    });

    //Empty out the search bar after submission
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          row="2"
          column="12"
          name="destination"
          className="search-bar"
          placeholder="City, State"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-btn" type="submit">
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
