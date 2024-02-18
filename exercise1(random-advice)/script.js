
const advice = document.querySelector(".advice");
const adviceTag = document.querySelector(".adviceTag")
const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click",()=> {
   let randomNum = Math.floor(Math.random()*224) +1;
   // invoking the func
   getAdvice(randomNum)
});

const getAdvice = async(id) => {
   try { 
      const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
      const data = await res.json();
      advice.textContent= `" ${data.slip.advice} "`;
      adviceTag.textContent= `Advice #${data.slip.id}`;
   } catch(error) {
      throw new Error("Something went WRONG !!!");
   }
};