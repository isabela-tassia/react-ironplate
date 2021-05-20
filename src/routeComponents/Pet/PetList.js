import { useState, useEffect } from "react";
import PetCard from "./PetCard";
import api from "../../apis/api";
import Header from "../../components/LikeBoard/Header";
import "../DashBoard.css";
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
    <div className="app">
      <Header />

      {pets.map((pet) => {
        return (
          <div key={pet._id} className="">
            <PetCard pet={pet} />
          </div>
        );
      })}
    </div>
  );
}

export default PetList;
