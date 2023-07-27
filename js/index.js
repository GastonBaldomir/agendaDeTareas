const boton=document.getElementById('btn')
const input=document.querySelector('input')
const ul=document.querySelector("ul")
const div=document.getElementById("noTareas")

//crear una lista para agregar las tareas, si la lista esta vacia mostrar el texto

boton.addEventListener('click', (e)=>{
        e.preventDefault();
    const texto = (input).value;
//crear elementos y asigno texto a 'p'
if(texto){
    const li=document.createElement('li')
    li.className="list-group-item lis mb-2 d-flex"
    const p=document.createElement('p')
    //a p le agrego el input
    p.className="m-1 text-secondary"
    p.textContent=texto;
//añadir p a li y li a ul. asi aparecen en la ul y se agregan.
    li.appendChild(p);
        //llamo la funcion boton borrar para agregar el boton
        li.appendChild(botonBorrar())
        //
    ul.appendChild(li);

    //despues de añadir se borra el input
    input.value="";
    div.style.display="none"
}
})

function botonBorrar(){
    //crear el boton
    const botonDelete= document.createElement('button')
    //agregar el contenido del boton
    botonDelete.textContent= "";
    botonDelete.className="botonBorrar btn-close"
    //agrego el evento del boton aca, es mas facil que crearlo y despues agregarlo.

    botonDelete.addEventListener('click', (e)=>{
        //accedo al elemento padre del boton, porque quiero borrar el li, no el btn.
        const item= e.target.parentElement;
        ul.removeChild(item);
        const items = document.querySelectorAll('li')
        if(items.length===0){
            div.style.display="block"
        }
    })
    return botonDelete
}



