import { useState, useEffect } from "react";
import axios from "axios";
import Cards, { Card2 } from "./Cards";
import Pages from "./Pages";
const Home = () => {
  const [people, setPeople] = useState([]);
  const [pag, setPag] = useState({});
  const [search, setSearch] = useState("");
  const [arrId, setArrId] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const getPeople = async (url = initialUrl) => {
    let response = await axios.get(url);

    setPeople(response.data.results);
    setPag(response.data.info);
  };

  useEffect(() => {
    getPeople();

    // bnBuscar_click();
  }, []);

  const onPrevious = async () => {
    getPeople(pag.prev);
  };
  const onNext = async () => {
    getPeople(pag.next);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setArrId([]);
    // console.log(e.)

    //filtrar(e.target.value);
  };

  const bnBuscar_click = () => {
    axios({
      url: "https://rickandmortyapi.com/graphql",
      method: "post",
      data: {
        query: `
      query {
        characters(filter: { name: "${search}" }) { 
            info{count},   
          results {
            name,id,
          }
        }
        
      }
        `,
      },
    }).then((result) => {
      //  console.log("result", result.data.data.characters.results);
      setArrId(result.data.data.characters.results.map((x) => x.id));
    });
  };

  const filtrar = (finishSearch) => {
    let resultSearch = people.filter((element) => {
      // console.log(element)

      if (
        element.results.name
          .toString()
          .toLowerCase()
          .includes(finishSearch.toLowerCase)
      ) {
        return element;
      }
      setPeople(resultSearch);
    });
  };

  return (
    <div className="container mt-5">
      <h1>RICK AND MORTY Home</h1>
      <div className="containerInput">
        <input
          className="form-control"
          value={search}
          placeholder="Búsqueda"
          onChange={handleSearch}
        />
        <button className="btn btn-success" onClick={bnBuscar_click}>
          Buscar
        </button>
        {/*  <pre>{JSON.stringify(arrId, null, 3)}</pre> */}
      </div>
      <Pages
        prev={pag.prev}
        next={pag.next}
        onPrevious={onPrevious}
        onNext={onNext}
      ></Pages>
      {search === "" ? (
        <Cards people={people}></Cards>
      ) : (
        <div className="row">
          <div>
          {arrId.map((x) => (
            <Card2 id={x} key={x} />
          ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
