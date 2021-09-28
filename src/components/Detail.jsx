import { reject } from "async";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {  useHistory } from "react-router-dom";

export const Detail = (people) => {
  const [person, setPerson] = useState();
  const history= useHistory()

  const { itemid } = useParams();
 // console.log(itemid);

  const getPerson = async (id) => {
    let response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setPerson(response.data);
  };

  useEffect(() => {
    getPerson(itemid);
    // console.log(person)
  }, []);

  return (
    <>
      {person && (
        <div className="container ">
          <div className="card m-auto mt-5 " style={{ width: "400px" }}>
            <h2 className="p-2 text-center pt-4">{person.name}</h2>
            <img
              className="card-img-top mx-auto"
              style={{ width: "380px" }}
              src={person.image}
              alt=""
            />
            <div className="card-body">
              <div className="px-1">
                <p>Estatus: {person.status}</p>
                <p>Especie: {person.species}</p>
                <p>Genero: {person.gender}</p>
                <p>Origen: {person.origin.name}</p>
                <p>Localizacion: {person.location.name}</p>

                <button className='btn btn-outline-primary'
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  Ir a la lista
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Detail;

/*
 const ImageLoad = (url) => {
  return (
    <img src={url} alt="cargando" />
  )
}*/

/*
 {
            JSON.stringify(person, null, 3)
          }
*/
