const container= document.querySelector(".container")
const refreshBtn= document.querySelector(".refresh-btn")

const maxPaletteBoxes=30;


const  generatePalette =()=>{

    container.innerHTML = "";   // clearing the container

    for(let i=0; i<maxPaletteBoxes; i++){
        
        // generating a random hex color code
        let randomHex=Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex= `#${randomHex.padStart(6,"0")}`;
        


        // creating a new 'li' element and inserting it to the container
        const color= document.createElement("li");
        color.classList.add("color");

        color.innerHTML = `<div class="react-box" style="background:${randomHex}">      </div>
                           <span class="hex-value">${randomHex}</span>`;



        // adding click event to current li element to copy the color
        color.addEventListener("click", ()=> copycolor(color,randomHex));                   
        container.appendChild(color);

    }
    
}
generatePalette();



const copycolor= (elem, hexVal) =>{
    const colorElement=elem.querySelector(".hex-value");

    // copying the hex value , updating the text to clipboard
    // and changing text back to original  hex value after 1 sec
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText  = "Copied";
        setTimeout(()=> colorElement.innerText  = hexVal,1000)
    })
}
refreshBtn.addEventListener("click", generatePalette);