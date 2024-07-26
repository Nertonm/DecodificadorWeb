# DecodificadorWeb

Este é um projeto simples de um decodificador web que permite criptografar e descriptografar textos usando substituições de caracteres específicas. A interface web permite a entrada de texto, a execução das funções de criptografia e descriptografia, e a cópia do texto resultante para a área de transferência.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:
1. `index.html` - Contém a estrutura HTML da aplicação.
2. `style.css` - Estiliza a interface da aplicação.
3. `main.js` - Contém a lógica de criptografia, descriptografia e interação com a interface.

## Funcionalidades

- **Criptografar**: Substitui as vogais do texto de entrada por sequências de caracteres específicas.
- **Descriptografar**: Reverte a criptografia, substituindo as sequências de caracteres pelas vogais originais.
- **Copiar**: Copia o texto resultante para a área de transferência.

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
