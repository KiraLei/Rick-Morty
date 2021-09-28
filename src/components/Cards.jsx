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
            <Link to={`/detail/${person.id}`}>
              <div className="card">
                <h2>{person.name}</h2>

                <img src={person.image} alt="photo" />
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
  // const {itemid}=useParams()
  // console.log(itemid)
  const [person, setPerson] = useState(undefined);
  useEffect(() => {
    axios({
      url: "https://rickandmortyapi.com/api/character/" + id,
      method: "get",
    }).then((result) => {
     // console.log("card2 - result", result.data);
      setPerson(result.data);
    });
  }, []);

  return (
    <div className="card" style={{ maxWidth: "350px" }}>
      {person ? (
       
          <Link to={`/detail/${person.id}`}>
         
            <h2>{person.name}</h2>

            <img src={person.image} alt="photo" />
           
          </Link>
       
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};
