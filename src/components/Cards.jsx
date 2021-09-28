import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const Cards = ({ people }) => {
  const { itemid } = useParams();
  console.log(itemid);

  return (
    <div className="row">
      {people.length ? (
        people.map((person) => (
          <div className="col mb-5" key={person.created}>
            <Link className="decoration" to={`/detail/${person.id}`}>
              <div className="card flex">
                <img src={person.image} alt="photo" />
                <div>
                  <h2>{person.name}</h2>
                  <p>{person.status}</p>
                  <p>{person.origin.name}</p>
                  <p>{person.gender}</p>
                  <p>{person.species}</p>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};
export default Cards;

export const Card2 = ({ id }) => {
  const [person, setPerson] = useState(undefined);
  useEffect(() => {
    axios({
      url: "https://rickandmortyapi.com/api/character/" + id,
      method: "get",
    }).then((result) => {
      setPerson(result.data);
    });
  }, []);

  return (
    <div className="col mb-5" style={{ maxWidth: "480px" }}>
      {person ? (
        <Link className="decoration" to={`/detail/${person.id}`}>
          <div className="card flex">
            <img src={person.image} alt="photo" />
            <div>
              <h2>{person.name}</h2>
              <p>{person.status}</p>
              <p>{person.origin.name}</p>
              <p>{person.gender}</p>
              <p>{person.species}</p>
            </div>
          </div>
        </Link>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};
