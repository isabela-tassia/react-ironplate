import { Link } from "react-router-dom";
import "./PetCard.css";

function PetCard(props) {
  return (
    <Link
      className="text-decoration-none "
      key={props.pet._id}
      to={`/pet/${props.pet._id}`}
    >
      <div
        className="card card-fixed-height text-dark shadow rounded border-0 m-2"
        style={{ width: "100%" }}
      >
        <div className="card-img-container d-flex justify-content-center align-items-center">
          <img
            className="card-img product-img"
            src={props.pet.image}
            alt="pet"
          />
        </div>

        <div className="card-body">
          <h1 title={props.pet.name}>
            <small>{props.pet.name}</small>
          </h1>

          <p className="ml-3 mr-1 mt-3">{props.pet.type}</p>
          <p className="ml-2 mr-2 mt-3">
            <small>{props.pet.gender}</small>
          </p>

          <p className="ml-2 mr-2 mt-3">
            <small>{props.pet.birthDate}</small>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
