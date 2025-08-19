# Validação de Upload de Arquivos

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Um projeto simples e robusto construído com Node.js, Express e Multer para gerenciar e validar uploads de arquivos. Este repositório serve como um exemplo prático de como implementar um endpoint de upload seguro, aplicando validações de tipo, tamanho e outras regras customizadas.

## ✨ Funcionalidades

- **Endpoint de Upload**: Rota dedicada para receber arquivos via `multipart/form-data`.
- **Validação de Arquivos**:
  - Filtro por tipo de arquivo (MIME type) para aceitar apenas os formatos desejados (ex: `image/jpeg`, `image/png`).
  - Limite de tamanho máximo por arquivo para evitar uploads excessivos.
- **Armazenamento em Disco**: Os arquivos válidos são salvos em um diretório local (`/uploads`).
- **Tratamento de Erros**: Respostas claras para uploads inválidos ou que excedam os limites.
- **Estrutura com TypeScript**: Código organizado e tipado para maior manutenibilidade e escalabilidade.

---

## 🚀 Começando

Siga as instruções abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js (versão 18.x ou superior recomendada)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/uploadValidation.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd uploadValidation
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

### Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento (com recarregamento automático), execute:

```sh
npm run dev
```


O servidor estará disponível em `http://localhost:3000` (ou na porta definida no seu arquivo de configuração).

---


## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs e servidores web.
- **Multer**: Middleware para manipulação de `multipart/form-data`.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Validator.js**: Biblioteca para validação de strings e dados.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
