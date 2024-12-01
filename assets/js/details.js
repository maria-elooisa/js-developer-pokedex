function showPokemonDetails(number) {
    pokeApi.getPokemons(number - 1, 1).then((pokemons) => {
        const pokemon = pokemons[0];

        // Atualizar imagem, nome e número do Pokémon
        document.getElementById('detailsTitle').innerText = pokemon.name;
        document.getElementById('detailsImage').src = pokemon.photo;
        document.getElementById('detailsImage').alt = pokemon.name;

        // Preencher aba "Sobre"
         document.getElementById('detailsNumber').innerText = `# ${pokemon.number}`;
         document.getElementById('detailsSpecies').innerText = `Espécie: ${pokemon.species}`;
         document.getElementById('detailsType').innerText = ` ${pokemon.types.join(', ')}`;
         document.getElementById('detailsHeight').innerText = `Altura: ${pokemon.height / 10} m`; // Convertendo para metros
         document.getElementById('detailsWeight').innerText = `Peso: ${pokemon.weight / 10} kg`; // Convertendo para kg
         document.getElementById('detailsAbilities').innerText = `Habilidades: ${pokemon.abilities.join(', ')}`;

        // Alterar o fundo da div.detailsInfo com base no tipo do Pokémon
        const detailsInfo = document.querySelector('.detailsInfo');
        detailsInfo.className = 'detailsInfo'; // Remove todas as classes extras
        detailsInfo.classList.add(pokemon.type); // Adiciona a classe do tipo

        // Mostrar o modal de detalhes
        document.getElementById('pokemonDetails').classList.add('open');
    });
}

// Fechar a aba de detalhes
document.getElementById('closeDetails').addEventListener('click', () => {
    document.getElementById('pokemonDetails').classList.remove('open');
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Troca de abas
tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remover "active" de todos os botões
        tabButtons.forEach((btn) => btn.classList.remove('active'));

        // Adicionar "active" ao botão clicado
        button.classList.add('active');

        // Mostrar o conteúdo da aba correspondente
        const targetTab = button.getAttribute('data-tab');
        tabContents.forEach((content) => {
            content.id === `${targetTab}Tab`
                ? content.classList.remove('hidden')
                : content.classList.add('hidden');
        });
    });
});
