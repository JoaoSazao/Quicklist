# 📝 Quicklist

Uma aplicação web moderna e intuitiva para gerenciar suas listas de compras e tarefas do dia a dia.

![Quicklist](https://img.shields.io/badge/version-1.0.0-pink)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Sobre o Projeto

Quicklist é uma aplicação de lista de tarefas simples e elegante, desenvolvida com foco em usabilidade e design moderno. Perfeita para organizar suas compras semanais ou qualquer tipo de lista de afazeres.

## ✨ Funcionalidades

- ✅ **Adicionar itens** - Adicione novos itens à sua lista com facilidade
- ✅ **Marcar como concluído** - Checkbox interativo com feedback visual
- ✅ **Remover itens** - Exclua itens desnecessários da lista
- ✅ **Notificações** - Feedback visual ao completar ou remover tarefas
- ✅ **Design responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Itens padrão** - Lista vem com 2 itens de exemplo pré-carregados

## 🚀 Demonstração

### Desktop
![Desktop Preview](https://quicklist-xi.vercel.app/)


## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript (Vanilla)** - Lógica e interatividade
- **Tailwind CSS** (via CDN) - Classes utilitárias
- **Boxicons** - Ícones modernos
- **Google Fonts (Inter)** - Tipografia

## 📦 Estrutura do Projeto

```
quicklist/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e design
├── scripts/
│   ├── script.js           # Lógica JavaScript
├── assets/
│   ├── logo.png        # Logo da aplicação
│   └── icons/
│       └── favicon.png # Ícone da aba do navegador
└── README.md           # Documentação
```

## 🎨 Paleta de Cores

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| Brand Primary | `#CA3884` | Botões, links e destaques |
| Brand Hover | `#A52C6B` | Estados hover |
| Danger | `#C93847` | Notificações de erro/remoção |
| Success | `#10B981` | Notificações de sucesso |
| Background | `#F4F5FB` | Fundo da página |

## 💻 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/quicklist.git
```

2. Navegue até a pasta do projeto
```bash
cd quicklist
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local

**Usando Live Server (VS Code):**
```bash
# Instale a extensão Live Server no VS Code
# Clique com botão direito em index.html > Open with Live Server
```

**Usando Python:**
```bash
# Python 3
python -m http.server 5500

# Acesse: http://localhost:5500
```

## 📱 Funcionalidades Detalhadas

### Adicionar Item
1. Digite o nome do item no campo de entrada
2. Clique em "Adicionar item" ou pressione Enter
3. O item aparecerá na lista abaixo

### Marcar como Concluído
1. Clique no checkbox ao lado do item
2. O item ganhará uma borda colorida e o texto ficará riscado
3. Uma notificação verde de "Tarefa concluída com sucesso" aparecerá

### Remover Item
1. Clique no ícone de lixeira ao lado do item
2. O item será removido imediatamente
3. Uma notificação vermelha de confirmação aparecerá

### Botão Voltar
- Clique no botão "← Voltar" para recarregar a página e resetar a lista

## 🎯 Características Técnicas

### Responsividade
- **Desktop** (> 768px): Layout completo com logo
- **Tablet** (≤ 768px): Logo oculta, layout otimizado
- **Mobile** (≤ 480px): Interface compacta e touch-friendly

### Performance
- Sem dependências pesadas
- JavaScript vanilla puro
- CSS otimizado com variáveis
- Animações suaves com transitions

### Acessibilidade
- Labels associados aos inputs
- Cores com bom contraste
- Elementos interativos com estados hover/focus
- Estrutura semântica HTML5

## 🔧 Customização

### Alterar Cores

Edite as variáveis CSS no arquivo `style.css`:

```css
:root {
    --color-brand: #CA3884;        /* Sua cor principal */
    --color-brand-hover: #A52C6B;  /* Hover da cor principal */
    --color-danger: #C93847;       /* Cor de erro */
}
```

### Alterar Itens Padrão

Edite o array no arquivo `script.js`:

```javascript
function addDefaultItems() {
  const defaultItems = ['Seu Item 1', 'Seu Item 2'];
  // ...
}
```

### Alterar Tipografia

Substitua a fonte no `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;600;700&display=swap');

:root {
    --font-family: 'SuaFonte', sans-serif;
}
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## 👨‍💻 Autor

**SazonDEV**

- GitHub: [@JoaoSazao](https://github.com/JoaoSazao)
- LinkedIn: [João Victor Santos](https://www.linkedin.com/in/joao-victor-sa/)
- Email: jv.sadev.profissional@gmail.com

Feito com ❤️ e ☕
