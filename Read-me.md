# StopWatch - Documentação do Projeto

## Índice
1. [Introdução](#introdução)
2. [Estrutura dos Arquivos](#estrutura-dos-arquivos)
3. [Principais Pontos e Soluções](#principais-pontos-e-soluções)
    - [1. Estrutura de Classe (`stopWatch.js`)](#1-estrutura-de-classe-stopwatchjs)
    - [2. Manipulação do DOM e Callbacks (`script.js`)](#2-manipulação-do-dom-e-callbacks-scriptjs)
    - [3. Estrutura HTML (`index.html`)](#3-estrutura-html-indexhtml)
    - [4. Estilização (`style.css`)](#4-estilização-stylecss)
4. [Sugestões de Imagens](#sugestões-de-imagens)

---

## Introdução

<img src="images/tela%20inicial.png" alt="Tela Inicial" width="400"/>

Este projeto implementa um cronômetro digital (StopWatch) utilizando HTML, CSS e JavaScript, com foco em organização, reutilização de código e boas práticas de programação orientada a objetos.

---

## Estrutura dos Arquivos

- **index.html**: Estrutura base da interface.
- **style.css**: Estilos visuais do cronômetro.
- **stopWatch.js**: Lógica principal encapsulada em uma classe.
- **script.js**: Integração entre a interface e a lógica do cronômetro.

---

## Principais Pontos e Soluções

### 1. Estrutura de Classe (`stopWatch.js`)

- **Classe `StopWatch`**: Centraliza toda a lógica do cronômetro, facilitando manutenção e reutilização.
- **Conceitos Utilizados**:
  - Encapsulamento: métodos e propriedades privadas.
  - Responsabilidade única: cada método tem uma função clara (start, stop, reset, update).
  - Controle de estado interno (tempo, intervalo, status).

### 2. Manipulação do DOM e Callbacks (`script.js`)

- **Callbacks**: Funções passadas para atualizar a interface sempre que o tempo muda.
- **Integração**: Eventos de clique nos botões (start, stop, reset) conectam a interface à lógica da classe.
- **Separação de responsabilidades**: O script principal apenas conecta a interface à lógica, mantendo o código limpo.

### 3. Estrutura HTML (`index.html`)

- **Semântica**: Uso de elementos claros para exibir o tempo e botões de controle.
- **Acessibilidade**: Possibilidade de adicionar atributos ARIA e roles para melhorar a experiência.

### 4. Estilização (`style.css`)

- **Design Responsivo**: Adaptação para diferentes tamanhos de tela.
- **Destaque Visual**: Cores e fontes que facilitam a leitura do tempo.
- **Animações**: Possibilidade de adicionar transições suaves para tornar a experiência mais agradável.


---

## Exemplo de Imagem da Interface
![Tela Estendida do Cronômetro](images/tela%20Celular.png)


![Tela Estendida do Cronômetro](images/tela%20estendida.png)

> A imagem acima mostra a interface do cronômetro em funcionamento, destacando o layout e os controles principais e responsividade

---

