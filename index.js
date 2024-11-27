const body=document.querySelector('.container-dynamic')
for(let  n = 0;  n < 100;  n++){
    const contenedor=document.createElement("div")
    contenedor.classList.add('media-dynamic')
    const img=document.createElement("img")
    img.src="Img/Better-call-Saul.jpg"
    contenedor.appendChild(img)
    body.appendChild(contenedor)
    }
