import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Header from "../components/LikeBoard/Header";
import Person from "../components/LikeBoard/Person";
import Lonely from "../components/LikeBoard/Lonely";
import api from "../apis/api";
//import data from "../data.json";

const DashBoard = () => {
  const [pets, setPets] = useState([]);

  const [user, setUser] = useState({
    likedUsers: [],
    dislikedUsers: [],
    superLikedUsers: [],
  });

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await api.get("/pet-dashboard");
        console.log(response);
        setPets([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPets();
  }, []);

  const removedPersonFromDataSrc = (petsSource, userId) =>
    petsSource.filter((user) => user._id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    console.log(pets);
    switch (action) {
      case "ADD_TO_LIKED_USERS":
        if (!user.likedUsers.includes(userId)) {
          setUser({ ...user, likedUsers: [...user.likedUsers, userId] });
          setPets(removedPersonFromDataSrc(pets, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!user.dislikedUsers.includes(userId)) {
          setUser({ ...user, dislikedUsers: [...user.dislikedUsers, userId] });
          setPets(removedPersonFromDataSrc(pets, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (!user.superLikedUsers.includes(userId)) {
          setUser({
            ...user,
            superLikedUsers: [...user.superLikedUsers, userId],
          });
          setPets(removedPersonFromDataSrc(pets, userId));
        }
        break;
      default:
        return pets;
    }
  };

  return (
    <div className="app">
      <Header />
      {pets[1] ? (
        <Person
          key={pets[1]._id}
          person={pets[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={user.likedUsers}
        />
      ) : (
        <Lonely />
      )}
    </div>
  );
};

export default DashBoard;
