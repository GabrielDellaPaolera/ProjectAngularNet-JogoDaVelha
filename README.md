# 🎮 Jogo da Velha - Angular + ASP.NET Core + PostgreSQL

Olá! 👋 Me chamo Gabriel e este é um projeto prático de Jogo da Velha, criado para treinar a integração entre front-end e back-end usando tecnologias modernas: Angular no front, ASP.NET Core no back, e PostgreSQL como banco de dados.

---

## ✅ O que esse projeto faz?

- Interface simples para jogar Jogo da Velha entre dois jogadores (X e O)
- Ao final da partida, o vencedor (ou empate) é salvo no banco de dados
- Uma seção mostra em tempo real os **10 últimos vencedores** (excluindo empates)

---

## 🧱 Tecnologias utilizadas

### Front-end
- Angular 15+
- TypeScript
- HTML + CSS puro (sem frameworks de UI)
- HttpClient (para comunicação com API)

### Back-end
- ASP.NET Core 6+
- API RESTful com Entity Framework Core
- Conexão com banco PostgreSQL
- Migrations e persistência de dados

---

## 📂 Estrutura do projeto

ProjectAngularNet/
│
├── frontend/ # Código Angular
│ └── src/...
│
├── backend/ # API .NET Core + EF Core
│ ├── Controllers/
│ ├── Models/
│ ├── Data/
│ └── Program.cs
│
└── README.md 

---

## 🔧 Como rodar o projeto localmente

### 1. Pré-requisitos

- Node.js v20.19+ (Angular exige)
- Angular CLI 15+ (`npm install -g @angular/cli`)
- .NET 6 SDK ou superior
- PostgreSQL (instalado localmente)

---

### 2. Clonar o repositório

```bash
git clone https://github.com/GabrielDellaPaolera/jogo-da-velha-angular-net.git
cd ProjectAngularNet
```


### 3. Configurar o Banco de Dados

1. Instale o PostgreSQL: [https://www.postgresql.org/download](https://www.postgresql.org/download)
2. Crie um banco chamado `jogo_da_velha`
3. Atualize a connection string no arquivo `backend/appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=jogo_da_velha;Username=postgres;Password=SUA_SENHA_AQUI"
}

```

### 4. Rode as migrations:

cd backend
dotnet ef database update

### 5. Rode o backend 

cd backend
dotnet run


### 6. Rode o frontend

cd frontend
npm install
ng serve --open


### 7. Overview 

- Escolha os jogadores e inicie a partida

- O jogo acontece no navegador

- Ao finalizar, o resultado é salvo na API

- A lista de vencedores é atualizada em tempo real


### 8. Contatos 

GitHub: github.com/GabrielDellaPaolera

LinkedIn: linkedin.com/in/gabrielpaolera
