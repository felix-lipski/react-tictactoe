import { useEffect, useState } from "react";

const ApiTest = () => {
  useEffect(() => {
    fetch("https://swapi.dev/api/peoplee")
      .then((response) => response.json())
      .then((res) => setPeople(res.results.map((person) => person.name)));
  });

  const [people, setPeople] = useState([]);

  return (
    <div>
      {people.map((person) => (
        <h1>{person}</h1>
      ))}
    </div>
  );
};

export default ApiTest;
