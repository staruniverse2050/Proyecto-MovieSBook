
document.addEventListener("keyup", e=>{

      if (e.target.matches("#searchbar")){

        if (e.key ==="Escape")e.target.value = " "
  
        document.querySelectorAll(".caja").forEach(seccion =>{
  
          seccion.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?seccion.classList.remove("filtro")
              :seccion.classList.add("filtro")
              
        })
  
    }
  
  
  })