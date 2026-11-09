// Base de Dados de Trios Evolutivos Lineares (Sem ramificações como Eevee)
const POKEMON_EVOLUTION_TRIOS = [
  { id: 1, firstStage: "Bulbasaur", stages: [{ id: 1, name: "Bulbasaur" }, { id: 2, name: "Ivysaur" }, { id: 3, name: "Venusaur" }] },
  { id: 2, firstStage: "Charmander", stages: [{ id: 4, name: "Charmander" }, { id: 5, name: "Charmeleon" }, { id: 6, name: "Charizard" }] },
  { id: 3, firstStage: "Squirtle", stages: [{ id: 7, name: "Squirtle" }, { id: 8, name: "Wartortle" }, { id: 9, name: "Blastoise" }] },
  { id: 4, firstStage: "Caterpie", stages: [{ id: 10, name: "Caterpie" }, { id: 11, name: "Metapod" }, { id: 12, name: "Butterfree" }] },
  { id: 5, firstStage: "Weedle", stages: [{ id: 13, name: "Weedle" }, { id: 14, name: "Kakuna" }, { id: 15, name: "Beedrill" }] },
  { id: 6, firstStage: "Pidgey", stages: [{ id: 16, name: "Pidgey" }, { id: 17, name: "Pidgeotto" }, { id: 18, name: "Pidgeot" }] },
  { id: 7, firstStage: "Nidoran♀", stages: [{ id: 29, name: "Nidoran♀" }, { id: 30, name: "Nidorina" }, { id: 31, name: "Nidoqueen" }] },
  { id: 8, firstStage: "Nidoran♂", stages: [{ id: 32, name: "Nidoran♂" }, { id: 33, name: "Nidorino" }, { id: 34, name: "Nidoking" }] },
  { id: 9, firstStage: "Abra", stages: [{ id: 63, name: "Abra" }, { id: 64, name: "Kadabra" }, { id: 65, name: "Alakazam" }] },
  { id: 10, firstStage: "Machop", stages: [{ id: 66, name: "Machop" }, { id: 67, name: "Machoke" }, { id: 68, name: "Machamp" }] },
  { id: 11, firstStage: "Bellsprout", stages: [{ id: 69, name: "Bellsprout" }, { id: 70, name: "Weepinbell" }, { id: 71, name: "Victreebel" }] },
  { id: 12, firstStage: "Geodude", stages: [{ id: 74, name: "Geodude" }, { id: 75, name: "Graveler" }, { id: 76, name: "Golem" }] },
  { id: 13, firstStage: "Gastly", stages: [{ id: 92, name: "Gastly" }, { id: 93, name: "Haunter" }, { id: 94, name: "Gengar" }] },
  { id: 14, firstStage: "Dratini", stages: [{ id: 147, name: "Dratini" }, { id: 148, name: "Dragonair" }, { id: 149, name: "Dragonite" }] },
  { id: 15, firstStage: "Mareep", stages: [{ id: 179, name: "Mareep" }, { id: 180, name: "Flaaffy" }, { id: 181, name: "Ampharos" }] },
  { id: 16, firstStage: "Larvitar", stages: [{ id: 246, name: "Larvitar" }, { id: 247, name: "Pupitar" }, { id: 248, name: "Tyranitar" }] },
  { id: 17, firstStage: "Torchic", stages: [{ id: 255, name: "Torchic" }, { id: 256, name: "Combusken" }, { id: 257, name: "Blaziken" }] },
  { id: 18, firstStage: "Mudkip", stages: [{ id: 258, name: "Mudkip" }, { id: 259, name: "Marshtomp" }, { id: 260, name: "Swampert" }] },
  { id: 19, firstStage: "Aron", stages: [{ id: 304, name: "Aron" }, { id: 305, name: "Lairon" }, { id: 306, name: "Aggron" }] },
  { id: 20, firstStage: "Bagon", stages: [{ id: 371, name: "Bagon" }, { id: 372, name: "Shelgon" }, { id: 373, name: "Salamence" }] },
  { id: 21, firstStage: "Beldum", stages: [{ id: 374, name: "Beldum" }, { id: 375, name: "Metang" }, { id: 376, name: "Metagross" }] },
  { id: 22, firstStage: "Starly", stages: [{ id: 396, name: "Starly" }, { id: 397, name: "Staravia" }, { id: 398, name: "Staraptor" }] },
  { id: 23, firstStage: "Shinx", stages: [{ id: 403, name: "Shinx" }, { id: 404, name: "Luxio" }, { id: 405, name: "Luxray" }] },
  { id: 24, firstStage: "Gible", stages: [{ id: 443, name: "Gible" }, { id: 444, name: "Gabite" }, { id: 445, name: "Garchomp" }] }
];

// Estado da Aplicação
const gameState = {
  totalCardsCount: 12,
  difficultyName: "Fácil (12)",
  selectedFixedTrios: [], // IDs dos trios selecionados (máx 2)
  tempSelectedTrios: [],
  activeCards: [],
  flippedCards: [],
  matchedTriosCount: 0,
  totalTriosTarget: 0,
  attempts: 0,
  isBoardLocked: false,
  isGameActive: false
};

// Elementos DOM
const dom = {
  gameBoard: document.getElementById('game-board'),
  attemptsCount: document.getElementById('attempts-count'),
  triosRemaining: document.getElementById('trios-remaining'),
  currentDifficultyLabel: document.getElementById('current-difficulty-label'),
  btnPlay: document.getElementById('btn-play'),
  btnPokemonSelect: document.getElementById('btn-pokemon-select'),
  btnDifficultySelect: document.getElementById('btn-difficulty-select'),
  btnRestart: document.getElementById('btn-restart'),
  selectedPokeBadge: document.getElementById('selected-poke-badge'),
  modalDifficulty: document.getElementById('modal-difficulty'),
  modalPokemon: document.getElementById('modal-pokemon'),
  modalVictory: document.getElementById('modal-victory'),
  pokemonSelectorGrid: document.getElementById('pokemon-selector-grid'),
  btnConfirmPokemon: document.getElementById('btn-confirm-pokemon'),
  finalAttempts: document.getElementById('final-attempts'),
  bonusMessage: document.getElementById('bonus-message'),
  btnVictoryRestart: document.getElementById('btn-victory-restart'),
  btnVictoryExit: document.getElementById('btn-victory-exit'),
  interactiveTitle: document.querySelector('.interactive-title')
};

// Obter URL do Sprite Oficial
function getSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderPokemonSelectionGrid();
});

// Configuração de Eventos
function setupEventListeners() {
  dom.btnPlay.addEventListener('click', startGame);
  dom.btnRestart.addEventListener('click', () => {
    if (gameState.isGameActive || dom.btnRestart.disabled === false) {
      startGame();
    }
  });

  // Abertura de Modais
  dom.btnDifficultySelect.addEventListener('click', () => openModal(dom.modalDifficulty));
  dom.btnPokemonSelect.addEventListener('click', () => {
    gameState.tempSelectedTrios = [...gameState.selectedFixedTrios];
    updatePokemonGridSelectionVisuals();
    openModal(dom.modalPokemon);
  });

  // Fechamento de Modais
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.target.getAttribute('data-close');
      closeModal(document.getElementById(modalId));
    });
  });

  // Opções de Dificuldade
  document.querySelectorAll('.diff-option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.diff-option-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');

      gameState.totalCardsCount = parseInt(target.getAttribute('data-cards'), 10);
      gameState.difficultyName = target.getAttribute('data-name');
      dom.currentDifficultyLabel.textContent = gameState.difficultyName;
      closeModal(dom.modalDifficulty);
    });
  });

  // Botão Confirmar Pokémons Selecionados
  dom.btnConfirmPokemon.addEventListener('click', () => {
    gameState.selectedFixedTrios = [...gameState.tempSelectedTrios];
    dom.selectedPokeBadge.textContent = `${gameState.selectedFixedTrios.length}/2`;
    closeModal(dom.modalPokemon);
  });

  // Botões do Modal de Vitória
  dom.btnVictoryRestart.addEventListener('click', () => {
    closeModal(dom.modalVictory);
    startGame();
  });

  dom.btnVictoryExit.addEventListener('click', () => {
    closeModal(dom.modalVictory);
    resetToInitialState();
  });

  // Efeito Título Interativo
  dom.interactiveTitle.addEventListener('click', () => {
    dom.interactiveTitle.style.transform = 'rotate(360deg)';
    setTimeout(() => dom.interactiveTitle.style.transform = 'none', 600);
  });
}

// Funções de Modal
function openModal(modal) {
  modal.classList.remove('hidden');
}

function closeModal(modal) {
  modal.classList.add('hidden');
}

// Renderizar Seleção de Pokémons (1º Estágio)
function renderPokemonSelectionGrid() {
  dom.pokemonSelectorGrid.innerHTML = '';
  POKEMON_EVOLUTION_TRIOS.forEach(trio => {
    const firstStage = trio.stages[0];
    const card = document.createElement('div');
    card.className = 'poke-select-card';
    card.dataset.trioId = trio.id;
    card.innerHTML = `
      <img src="${getSpriteUrl(firstStage.id)}" alt="${firstStage.name}" loading="lazy">
      <span>${firstStage.name}</span>
    `;

    card.addEventListener('click', () => togglePokemonSelection(trio.id, card));
    dom.pokemonSelectorGrid.appendChild(card);
  });
}

function togglePokemonSelection(trioId, cardElement) {
  const index = gameState.tempSelectedTrios.indexOf(trioId);
  if (index > -1) {
    gameState.tempSelectedTrios.splice(index, 1);
    cardElement.classList.remove('selected');
  } else {
    if (gameState.tempSelectedTrios.length < 2) {
      gameState.tempSelectedTrios.push(trioId);
      cardElement.classList.add('selected');
    } else {
      alert("Você pode escolher no máximo 2 trios evolutivos!");
    }
  }
}

function updatePokemonGridSelectionVisuals() {
  document.querySelectorAll('.poke-select-card').forEach(card => {
    const id = parseInt(card.dataset.trioId, 10);
    if (gameState.tempSelectedTrios.includes(id)) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

// Lógica Principal do Jogo
function startGame() {
  const triosNeeded = Math.floor(gameState.totalCardsCount / 3);
  gameState.totalTriosTarget = triosNeeded;
  gameState.matchedTriosCount = 0;
  gameState.attempts = 0;
  gameState.flippedCards = [];
  gameState.isBoardLocked = false;
  gameState.isGameActive = true;

  updateStatsDisplay();

  // Ativar botão reiniciar
  dom.btnRestart.disabled = false;

  // Seleção dos Trios para a Partida
  const selectedTrios = [];
  
  // 1. Adiciona os fixos escolhidos pelo usuário (até o limite de trios do nível)
  const chosenFixed = gameState.selectedFixedTrios.slice(0, triosNeeded);
  chosenFixed.forEach(id => {
    const trio = POKEMON_EVOLUTION_TRIOS.find(t => t.id === id);
    if (trio) selectedTrios.push(trio);
  });

  // 2. Preenche o restante com trios aleatórios da base
  const availableTrios = POKEMON_EVOLUTION_TRIOS.filter(t => !selectedTrios.includes(t));
  shuffleArray(availableTrios);

  while (selectedTrios.length < triosNeeded && availableTrios.length > 0) {
    selectedTrios.push(availableTrios.pop());
  }

  // Montar baralho de cartas (3 cartas por trio)
  const deck = [];
  selectedTrios.forEach(trio => {
    trio.stages.forEach(stage => {
      deck.push({
        trioId: trio.id,
        pokemonId: stage.id,
        name: stage.name,
        uniqueId: Math.random().toString(36).substring(2, 9)
      });
    });
  });

  // Embaralhar baralho
  shuffleArray(deck);
  gameState.activeCards = deck;

  // Renderizar Tabuleiro
  renderBoard(deck);
}

function renderBoard(cards) {
  dom.gameBoard.innerHTML = '';

  cards.forEach(cardData => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.dataset.uniqueId = cardData.uniqueId;
    cardEl.dataset.trioId = cardData.trioId;

    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-back">
          <div class="card-back-pattern"></div>
        </div>
        <div class="card-front">
          <img src="${getSpriteUrl(cardData.pokemonId)}" alt="${cardData.name}" class="poke-img">
          <span class="poke-name">${cardData.name}</span>
        </div>
      </div>
    `;

    cardEl.addEventListener('click', () => handleCardClick(cardEl, cardData));
    dom.gameBoard.appendChild(cardEl);
  });
}

// Manipulação do Clique na Carta
function handleCardClick(cardEl, cardData) {
  if (gameState.isBoardLocked) return;
  if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

  // Virar carta
  cardEl.classList.add('flipped');
  gameState.flippedCards.push({ element: cardEl, data: cardData });

  // Quando 3 cartas forem viradas
  if (gameState.flippedCards.length === 3) {
    gameState.attempts++;
    updateStatsDisplay();
    checkTrioMatch();
  }
}

// Validação do Trio
function checkTrioMatch() {
  gameState.isBoardLocked = true;
  const [c1, c2, c3] = gameState.flippedCards;

  const isMatch = (c1.data.trioId === c2.data.trioId) && (c2.data.trioId === c3.data.trioId);

  if (isMatch) {
    setTimeout(() => {
      c1.element.classList.add('matched');
      c2.element.classList.add('matched');
      c3.element.classList.add('matched');

      gameState.matchedTriosCount++;
      gameState.flippedCards = [];
      gameState.isBoardLocked = false;
      updateStatsDisplay();

      // Verificar se o jogo finalizou
      if (gameState.matchedTriosCount === gameState.totalTriosTarget) {
        handleGameVictory();
      }
    }, 500);
  } else {
    // Caso erre, desvira após 1 segundo
    setTimeout(() => {
      c1.element.classList.remove('flipped');
      c2.element.classList.remove('flipped');
      c3.element.classList.remove('flipped');

      gameState.flippedCards = [];
      gameState.isBoardLocked = false;
    }, 1000);
  }
}

// Vitória
function handleGameVictory() {
  gameState.isGameActive = false;
  dom.finalAttempts.textContent = gameState.attempts;

  // Bônus para vitória perfeita (sem nenhum erro)
  const minPossibleAttempts = gameState.totalTriosTarget;
  if (gameState.attempts === minPossibleAttempts) {
    dom.bonusMessage.classList.remove('hidden');
  } else {
    dom.bonusMessage.classList.add('hidden');
  }

  // Garantir que botão de reiniciar fique ativo
  dom.btnRestart.disabled = false;

  setTimeout(() => {
    openModal(dom.modalVictory);
  }, 600);
}

// Resetar para tela inicial
function resetToInitialState() {
  gameState.isGameActive = false;
  gameState.attempts = 0;
  gameState.matchedTriosCount = 0;
  gameState.totalTriosTarget = 0;

  updateStatsDisplay();

  dom.btnRestart.disabled = true;
  dom.gameBoard.innerHTML = `
    <div class="welcome-screen">
      <h2>Pronto para a jornada?</h2>
      <p>Selecione a dificuldade ou seus Pokémons favoritos e clique em <strong>Jogar</strong> para começar!</p>
    </div>
  `;
}

// Atualizar Painel de Estatísticas
function updateStatsDisplay() {
  dom.attemptsCount.textContent = gameState.attempts;
  const remaining = Math.max(0, gameState.totalTriosTarget - gameState.matchedTriosCount);
  dom.triosRemaining.textContent = remaining;
}

// Algoritmo de Embaralhamento (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}