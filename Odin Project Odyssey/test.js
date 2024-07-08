const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";


fetch(requestURL)
  .then(response => response.text())
  .then(text => JSON.parse(text))
  .then(text => displayCatInfo(text))

function displayCatInfo(obj) {
  console.log(obj);
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = 'My lovely cats';
  header.appendChild(myH1);

  for (cat in obj) {
    const myList = document.createElement("h3");
    myList.textContent = obj[cat].name;
    header.appendChild(myList);
    for (kitten in obj[cat].kittens) {
      const kittensList = document.createElement("p");
      kittensList.textContent = obj[cat].kittens[kitten].name;
      header.appendChild(kittensList);
    }
  }
}