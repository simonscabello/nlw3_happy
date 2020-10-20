const map = L.map('mapid').setView([-20.1993958,-40.2484765], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})

// upload photos

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se está vazio. se sim, nao adicionar ao container de fotos
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpar o campo antes de add ao container de imgs
    newFieldContainer.children[0].value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1 ) {
        span.parentNode.children[0].value = ""
        return
    }

    // dletar o campo

    span.parentNode.remove(0)

}

//troca do sim e nao
function toggleSelect(event) {
    //retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    // colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    //verificar se sim ou nao
    input.value = button.dataset.value
}

function validate(event) {

    // validar se lat e len estao preenchidos
    const needslatandlng = false;
    if(needslatandlng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
    
    
}