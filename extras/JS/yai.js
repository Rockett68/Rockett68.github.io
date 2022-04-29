var targetDiv = document.getElementById('content_');
var htmlContent = '';
let data;

/* async function fetchData() {
    let response = await fetch('Utilidad.json');
    data = await response.json();
    targetDiv.innerHTML = data;
}
 */
function populateData(event) {

    switch (event.target.value) {
        case 'Utilidad': {
            htmlContent =  "Utilidad";
            break;
        }
        case 'Diversion': {
            htmlContent = "Diversion";
            break;
        }
        case 'Links': {
            htmlContent = "Links";
        }
    }
    targetDiv.innerHTML = htmlContent;
}