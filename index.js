
const choosed = document.querySelector("select");

const getColorOption = () =>{
    console.log(typeof(choosed.value));
    document.querySelector("body").style.backgroundColor = choosed.value;
}

const GenerateRandomColor = (color) =>{
    const value = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+ value;
}