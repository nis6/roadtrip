import { AiFillDelete } from "react-icons/ai";

const Destination = ({ image, name, id, remove_location }) => {
  return (
    <div className="dest-card">
      <img src={image} className="dest-img" alt="Destination Image" />
      {name}
      <button className="dlt-btn" onClick={() => remove_location(id)}>
        <AiFillDelete size="2rem" />
      </button>
    </div>
  );
};

export default Destination;
