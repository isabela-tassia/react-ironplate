import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import ConfirmationModal from "../../components/ConfirmationModal";
import Header from "../../components/LikeBoard/Header";
import "../DashBoard.css";

function PetDetails() {
  const [state, setState] = useState({
    name: "",
    type: "",
    birthDate: "",
    gender: "",
    user: "",
    image: "",
  });
  const [showModal, setShowModal] = useState(false);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await api.get(`/pet/${id}`);
        console.log(response);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPet();
  }, [id]);

  return (
    <div className="app">
      <Header />

      {loggedInUser.user.role === "ADMIN" ? (
        <div className="row d-flex justify-content-end">
          <Link to={`/pet/edit/${id}`} className="btn btn-warning mr-3">
            Edit
          </Link>
          {/* Abrimos um modal de confirmação antes de deletar o produto */}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      ) : null}

      <img
        className="card-img product-img mx-auto mt-2"
        src={state.image}
        alt="pet"
      />
      <div className="card-body">
        <h1 className="card-title">
          <small>{state.name}</small>
        </h1>

        <h3 className="ml-3 mr-1 mt-2">{state.type}</h3>
        <p className="ml-2 mr-2 mt-3">
          <small>{state.gender}</small>
        </p>

        <p className="card-text ml-2 mr-2 mt-3">
          <small>{state.birthDate}</small>
        </p>
      </div>

      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={() => history.push(`/pet/delete/${id}`)}
        title="Are you sure you want to delete this pet?"
      >
        <p>This action is irreversible. To confirm, click "Confirm".</p>
      </ConfirmationModal>
    </div>
  );
}

export default PetDetails;
