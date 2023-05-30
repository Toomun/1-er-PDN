let pagina = 0;
let temaPrincipal = 'all' ;
const cargarNoticias = async (categoria) => {
    let url = `https://inshorts.deta.dev/news?category=${categoria}`
    try{
        const respuesta = await fetch (url);
        console.log(respuesta)

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos)

            let noticias = '';
            datos.data.forEach(noticia =>{
                noticias += `<a href ='${noticia.readMoreUrl}'>
                            <div class ="item">
                            <h3 class ="titnot">${noticia.title}</h3>
                            <div class = 'cajaimg'>
                            <img class="imgnot " src="${noticia.imageUrl}" height = '200' width='380'>
                            </div>
                            <h5 class="datenot">${noticia.date}</h5>
                            </div>
                            </a>`;
                
            })
            document.getElementById('container-noticias').innerHTML = noticias;
            


        } else if (respuesta.status === 401){
            console.log('Error')
        } else if (respuesta.status === 404){
            console.log ('La noticia no existe')
        }else{
            console.log ('Error inesperado.')
        }



    }
    catch(error){
        console.log(error)
    }
}
        





function buscar(cat){
    pagina = 0;
    temaActual = cat;
    cargarNoticias(cat);
}

function buscarTema(){
    pagina =0;
    let tema = document.querySelector("#busqueda").value;
    temaActual = tema;
    cargarNoticias(temaActual);
}

function detectarEnter(){
    var input = document.getElementById('busqueda');
    input.addEventListener('keypress',function(e){
        if (e.key === 'Enter'){
            document.getElementById('btn-buscar').click();
        }
    })
}


cargarNoticias(temaPrincipal);