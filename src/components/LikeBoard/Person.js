import React from "react";
import Actions from "./Actions";

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, type, gender, image } = person;

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={image} alt={name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {name}, <span>{type}</span>
          </p>
          <p className="person-info">{gender}</p>
        </div>
      </div>

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
