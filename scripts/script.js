// Seleção de elementos
const form = document.getElementById('form-add-item');
const input = document.getElementById('input-item');
const listItems = document.getElementById('list-items');
const btnBack = document.getElementById('btn-back');
const notification = document.getElementById('notification');
const notificationClose = document.getElementById('notification-close');

// Contador para IDs únicos
let itemCount = 0;

// Função para criar um item
function createItemElement(itemText) {
  // Incrementa o contador
  itemCount++;
  
  // Cria o elemento li
  const li = document.createElement('li');
  li.id = `item-${itemCount}`;
  
  // Adiciona o conteúdo do item
  li.innerHTML = `
    <div class="flex gap-[0.75rem]">
      <input id="checkbox-${itemCount}" type="checkbox" />
      <label for="checkbox-${itemCount}">${itemText}</label>
    </div>
    <button class="btn-delete">
      <i class="bx bx-trash"></i>
    </button>
  `;
  
  // Adiciona evento de clique no botão de deletar
  const btnDelete = li.querySelector('.btn-delete');
  btnDelete.addEventListener('click', () => removeItem(li));
  
  // Adiciona evento de mudança no checkbox
  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });
  
  return li;
}

// Função para adicionar itens padrão
function addDefaultItems() {
  const defaultItems = ['Pão de forma', 'Café preto'];
  
  defaultItems.forEach(item => {
    const li = createItemElement(item);
    listItems.appendChild(li);
  });
}

// Função para adicionar novo item
function addItem(e) {
  e.preventDefault();
  
  const itemText = input.value.trim();
  
  // Verifica se o input não está vazio
  if (itemText === '') {
    return;
  }
  
  // Cria e adiciona o item
  const li = createItemElement(itemText);
  listItems.appendChild(li);
  
  // Limpa o input
  input.value = '';
  
  // Foca no input novamente
  input.focus();
}

// Função para remover item
function removeItem(item) {
  // Remove o item da lista
  item.remove();
  
  // Mostra a notificação
  showNotification();
}

// Função para mostrar a notificação
function showNotification() {
  notification.classList.add('show');
  
  // Esconde a notificação após 3 segundos
  setTimeout(() => {
    hideNotification();
  }, 3000);
}

// Função para esconder a notificação
function hideNotification() {
  notification.classList.remove('show');
}

// Função para recarregar a página
function reloadPage() {
  location.reload();
}

// Inicialização - Adiciona itens padrão quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  addDefaultItems();
});

// Event Listeners
form.addEventListener('submit', addItem);
btnBack.addEventListener('click', reloadPage);
notificationClose.addEventListener('click', hideNotification);