# Jogo do Número Secreto 🎲

Este projeto é um **jogo interativo de sorteio de amigos**, onde você pode cadastrar nomes, exibi-los na interface e sortear um amigo de forma aleatória. O jogo foi desenvolvido com foco em aprimorar habilidades de lógica de programação utilizando JavaScript.

---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Fornecido pronto, utilizado para estruturar o conteúdo da página.
- **CSS**: Fornecido pronto, utilizado para estilizar o layout da aplicação.
- **JavaScript**: Implementado para adicionar toda a lógica e interatividade do jogo.

---

## 🚀 Funcionalidades

1. **Adicionar amigos à lista**:
   - Você pode digitar o nome de um amigo no campo de texto e clicar no botão "Adicionar Amigo".
   - Os nomes são armazenados em um array e exibidos na interface.

2. **Exibir a lista de amigos**:
   - Cada nome inserido aparece em uma lista na página, permitindo acompanhar os amigos cadastrados.

3. **Sortear um amigo**:
   - Com os amigos cadastrados, clique no botão "Sortear".
   - O jogo seleciona um amigo aleatoriamente e exibe o nome do sorteado.
   - Após o sorteio, a lista de amigos é automaticamente limpa.

---

## 🧐 Desafios e Dificuldades

Ao implementar a lógica do jogo, algumas partes apresentaram desafios comuns para iniciantes:

1. **Validação do campo de entrada**:
   - Um dos primeiros desafios foi garantir que o usuário não pudesse adicionar nomes vazios à lista. Isso foi resolvido com a verificação `if (nomeAmigo === "")` e o uso do método `.trim()` para evitar nomes com apenas espaços.

2. **Manipulação do DOM**:
   - Atualizar a lista de amigos na interface exigiu a criação dinâmica de elementos `<li>`, o que é essencial para aprender a trabalhar com o DOM (Document Object Model) no JavaScript.

3. **Geração de números aleatórios**:
   - A lógica de sorteio exigiu o uso da função `Math.random()` para gerar índices aleatórios. Apesar de simples, essa parte é sempre interessante e desafiadora ao se aprender como trabalhar com números aleatórios e arrays.

4. **Limpeza da lista após o sorteio**:
   - Para melhorar a experiência do usuário, foi necessário limpar a lista após o sorteio e atualizar a interface, algo que requer atenção ao sincronizar a lógica com o visual.

---

## 💡 Pontos Interessantes no Projeto

- **Interatividade em tempo real**: Toda a lógica foi implementada para refletir mudanças na interface sem necessidade de recarregar a página.
- **Uso do DOM**: Manipular elementos como listas e campos de texto permitiu explorar a interação entre JavaScript e HTML.
- **Array como estrutura principal**: O array `amigos` foi o núcleo da aplicação, armazenando os dados dinamicamente, o que é uma ótima prática para iniciantes.

---

