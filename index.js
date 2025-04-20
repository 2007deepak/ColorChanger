// const clicbtn = document.querySelector("#red");
// const heading = document.querySelector("h1");
// const clicbtn1 = document.querySelector("#blue");
// const clicbtn2 = document.querySelector("#Purple");
// const clicbtn3 = document.querySelector("#green");
// const clicbtn4 = document.querySelector("#Reset");

const heading = document.querySelector("h1");
const buttons = document.querySelectorAll(".color-btn");

buttons.forEach (button => {

    button.addEventListener("click", () =>{

        const color = button.getAttribute("id");

        if(color === "Reset")
        {
            heading.style.color = "";
        }else {
            heading.style.color = color;
        }
        console.log(`${color}clicked`);
        

    });
});


/* IN this Method we are doing code reuse so that why not use  */
// clicbtn.addEventListener("click", () => {
//   heading.style.color = "red";
   
//   console.log("hello ji");
  
// });

