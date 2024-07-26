# DecodificadorWeb
Este é um projeto do challenge do programa ONE, da Oracle em parceria com a Alura. Trata-se de um decodificador web que permite criptografar e descriptografar textos usando substituições de caracteres específicas. A interface web permite a entrada de texto, a execução das funções de criptografia e descriptografia, e a cópia do texto resultante para a área de transferência.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:
1. `index.html` - Contém a estrutura HTML da aplicação.
2. `style.css` - Estiliza a interface da aplicação.
3. `main.js` - Contém a lógica de criptografia, descriptografia e interação com a interface.

## Funcionalidades

- **Criptografar**: Substitui as vogais do texto de entrada por sequências de caracteres específicas.
- **Descriptografar**: Reverte a criptografia, substituindo as sequências de caracteres pelas vogais originais.
- **Copiar**: Copia o texto resultante para a área de transferência.
-   
## Uso

### Interface de Usuário

1. **Campo de Entrada**: Digite o texto que deseja criptografar ou descriptografar. Apenas letras minúsculas e sem acento são permitidas.
2. **Botões**:
    - `Criptografar`: Converte o texto de entrada para a forma criptografada.
    - `Descriptografar`: Converte o texto de entrada para a forma original, se estiver criptografado.
    - `Copiar`: Copia o texto resultante do campo de saída para a área de transferência.

### Substituições Utilizadas

- Criptografia:
    - `e` → `enter`
    - `i` → `imes`
    - `a` → `ai`
    - `o` → `ober`
    - `u` → `ufat`

- Descriptografia:
    - `enter` → `e`
    - `imes` → `i`
    - `ai` → `a`
    - `ober` → `o`
    - `ufat` → `u`

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

### HTML

- **HTML5**: Estrutura a página da web, definindo a semântica e a organização dos elementos.

### CSS

- **CSS3**: Utilizado para estilizar a interface do usuário, proporcionando uma experiência visual atraente e responsiva.
    - **Flexbox**: Para criar layouts flexíveis e alinhamentos eficientes.
    - **Media Queries**: Para garantir que a aplicação seja responsiva e funcione bem em diferentes tamanhos de tela.

### JavaScript

- **JavaScript (ES6+)**: Implementa a lógica de criptografia e descriptografia, bem como interações com a interface.
    - **Event Listeners**: Para responder a ações do usuário, como clicar nos botões.
    - **Clipboard API**: Para permitir que o usuário copie o texto criptografado/descriptografado para a área de transferência.

### Ferramentas e APIs

- **Clipboard API**: Permite copiar o texto para a área de transferência de forma eficiente e moderna.
