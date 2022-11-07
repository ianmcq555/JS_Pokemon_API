let form = document.querySelector('#pokeForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let P_name = event.path[0][0].value
    console.log(P_name);
    loadPokemon(P_name);
    form.reset();
})

let getPokemon = async (P_name)=> {
    try {
        let response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${P_name}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}


let loadPokemon = async (P_name)=> {
    let data = await getPokemon(P_name);
    console.log(data);
    let new_rows = `<tr><td scope='row'>${data.forms[0].name}</td></tr><tr><td scope='row'><img src=${data.sprites.other["official-artwork"].front_default}></td></tr>`;
    document.getElementById('pokemonBody').insertAdjacentHTML('afterbegin', new_rows);
}

let clearData = () => {
    document.getElementById('pokemonBody').innerHTML = '';
}