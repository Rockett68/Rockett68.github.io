var targetDiv = document.getElementById('content_');
var htmlContent = '';
/* let data;

window.addEventListener("load", function(){
    fetchData();
});

async function fetchData() {
    let response = await fetch('https://rockett68.github.io/extras/JS/Utilidad.json');
    data = await response.json();     
} */

function populateData(event) {

    switch (event.target.value) {
        case 'Conoce a YAI':{
            htmlContent = "<h1><strong><center>Hola Mundo!!</center></strong></h1><article>Soy Yei Artificial Inteligence, pero puedes llamarme YAI, soy un Bot creado por y para Rockett68, que sea un bot no quiere decir que no tenga sentimientos asi que tratame con respeto o te baneare sin pensarlo!!!</article><p>La mayoria del tiempo me podras ver en el chat y siempre que necesites algo intentare ayudarte lo mejor que pueda, cuento con muchos  comandos e interacciones (las cuales podras ver en la seccion de comandos).</p><article>Si ves algun error en mis comandos o en mi funcionamiento estaria muy feliz si informases a mi creador por Discord (Rockett68#3317), asi seguro que me repara y estare muy agradecida :3</article>";
            break;
        }
        case 'información': {
            htmlContent =  "<h1><center><strong>Informacion</strong></center></h1><p><strong>!comandos:</strong> Recibiras un link a esta pagina en el chat.</p><p><strong>!pagina:</strong> Recibiras un link hacia la pagina de rockett en el chat.</p><p><strong>!yei:</strong> Te dare informacion sobre mi.</p><p><strong>!rockett:</strong> ¿Quieres conocer un poco mas de mi creador? !Usa este comando!</p><p><strong>!bttv:</strong> Enviare los emotes de bttv activos en el canal.</p><p><strong>!uptime:</strong> Te dire cuanto lleva en stream rockett.</p><p><strong>!hora:</strong> Te dire que hora es en el pais de rockett.</p><p><strong>!horaen [pais]:</strong> Te dire la hora del pais que me digas (con algunas excepciones).</p><p><strong>!uptime:</strong> Te dire cuanto lleva en stream rockett.</p>";
            break;
        }
        case 'Diversion': {
            htmlContent = "WIP";
            break;
        }
        case 'Juegos': {
            htmlContent = "<h1><center><strong>Osu!</strong></center></h1><p><strong>!lazer:</strong> Conoce porque rockett juega en lazer.</p><p><strong>!osu:</strong> Visita el perfil de Osu! de Rockett.</p><br><h1><center><strong>Minecraft</strong></center></h1><p><strong>!datapack:</strong> ¿No sabes que es un datapack? !Usa este comando!</p>";
        }
    }
    targetDiv.innerHTML = htmlContent;
}