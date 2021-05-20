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
          <h4
            title={props.pet.name}
            className="card-title card-title-fixed-height text-truncate"
          >
            <small>{props.pet.name}</small>
          </h4>

          <h3 className="card-text">{props.pet.type}</h3>
          <p className="mb-0">
            <small className="card-text">{props.pet.gender}</small>
          </p>

          <p className="card-text mb-0 text-truncate">
            <small>{props.pet.birthDate}</small>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
