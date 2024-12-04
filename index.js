const body=document.querySelector('.container-dynamic')
for(let  n = 0;  n < 100;  n++){
    const contenedor=document.createElement("div")
    contenedor.classList.add('media-dynamic')
    const img=document.createElement("img")
    img.src="Img/Better-call-Saul.jpg"
    contenedor.appendChild(img)
    body.appendChild(contenedor)
    }



async function main(){
    async function getdata(){
        const data = await fetch("http://localhost:3000/categories")
        const json = await data.json()
        console.log("aquiiii", json)
        return json.data
    }
    
    const options = await getdata()

    for (const k in options){
        console.log(k)
    }
    
    console.log("options: ", options)
    
    const menu = document.getElementById("dropdown-options")
    
    for(const option of options){
        
        console.log(option)
        const li = document.createElement("li")
        li.innerHTML = option.name
        const link = document.createElement("a")
        link.href = option.destination
        link.appendChild(li)
        menu.appendChild(link)

        
       }
    }

    main()
