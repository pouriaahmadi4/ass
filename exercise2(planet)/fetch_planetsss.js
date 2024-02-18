//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////

const bodyEle = document.querySelector("body");
bodyEle.style.fontFamily = "sans-serif";
bodyEle.style.paddingLeft = "30px";

const url = "https://handlers.education.launchcode.org/static/planets.json";

const getData = async() => {
   try {
      const response = await fetch(url);
      const data = response.json();
      return(data);
   } catch(error) {
      throw new Error("error fetching data")
   }
};

// getData()


// This is the code to show the first planet's info So i comment this info to provide the next tasks: 🤨


// .then((data) => {
//    const planetOne = data[0];

//    const planetName = document.createElement("h4");
//    const planetDistance = document.createElement("h4");

//    planetName.textContent = `First planet's name : ${planetOne.name} `;
//    planetDistance.textContent = `First planet's distance : ${planetOne.distance}`;

//    const destination = document.getElementById("destination");
//    destination.appendChild(planetName);
//    destination.appendChild(planetDistance);
// })
// .catch((e)=>{
//    console.error(e)
// })


// initializing the counter
let index = 0;

getData()
.then((data)=>{
   const destination = document.getElementById("destination");
   destination.style.width = "500px";
   destination.style.height = "530px";
   destination.style.borderRadius = "8px";
   destination.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.7)" 
   destination.style.padding = "20px";
   destination.style.cursor = "pointer";
   destination.addEventListener("click", () => {

      const planet = data[index];

      const planetName = document.createElement("h4");
      const planetDiameter = document.createElement("h4");
      const planetStar = document.createElement("h4");
      const planetDistance = document.createElement("h4");
      const planetImage = document.createElement("img");
      const planetMoons = document.createElement("h4");

      planetName.textContent = `Name: ${planet.name}`;
      planetDiameter.textContent = `Diameter: ${planet.diameter}`;
      planetStar.textContent = `Star: ${planet.star}`;
      planetDistance.textContent = `Distance: ${planet.distance}`;
      planetImage.src = planet.image;
      planetImage.style.maxWidth = "300px";
      planetMoons.textContent = `Moons: ${planet.moons}`;

      destination.innerHTML = "";

      destination.appendChild(planetName)
      destination.appendChild(planetDiameter)
      destination.appendChild(planetStar)
      destination.appendChild(planetDistance)
      destination.appendChild(planetImage)
      destination.appendChild(planetMoons)

      // found this below line as the mechanism and its way cooler and shorter than what i wrote 😎
      // So i comment the other One

      index = (index+ 1)% data.length;
      
      // index++
      // if (index === data.length){
      //    index = 0;
      // }
   });

})
.catch((e)=>{
   console.error(e)
})
