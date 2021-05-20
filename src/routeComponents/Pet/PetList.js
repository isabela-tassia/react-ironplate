import { useState, useEffect } from "react";
import PetCard from "./PetCard";
import api from "../../apis/api";
import Logo from "../../components/LikeBoard/Logo";
function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await api.get("/pet");

        setPets([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPets();
  }, []);

  return (
    <div className="row">
      <Logo />
      {pets.map((pet) => {
        return (
          <div key={pet._id} className="col-12 col-sm-4 col-md-3">
            <PetCard pet={pet} />
          </div>
        );
      })}
    </div>
  );
}

export default PetList;
