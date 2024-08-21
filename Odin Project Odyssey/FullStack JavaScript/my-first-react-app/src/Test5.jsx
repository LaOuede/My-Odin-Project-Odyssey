function List(props) {
	return (
	  <ul>
		{props.animals.map((animal) => {
		  return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
		})}
	  </ul>
	);
  }
  
  function Animals() {
	const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
	return (
	  <div>
		<h1>Animals: </h1>
		<List animals={animals} />
	  </div>
	);
  }

export default Animals;