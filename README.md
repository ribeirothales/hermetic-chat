# Chat em Tempo Real 🚀💬
Uma aplicação de chat em tempo real, onde os usuários podem interagir instantaneamente com amigos e colegas. A aplicação inclui recursos como mensagens privadas, lista de usuários online, autenticação de usuários, alternânica entre temas Dark e Light e muito mais! 
- Acesse agora (https://hermetic-chat.onrender.com/)

![Texto Alternativo](https://i.imgur.com/UtTwyU9.png)

## Funcionalidades do Projeto ✨
### 1. Cadastro e Login de Usuário 🔑
- Cadastro de Novo Usuário: Criação de conta com nome completo, email e senha.
- Login de Usuário: Usuários registrados podem fazer login com email e senha.
- Logout de Usuário: Opção para desconectar a qualquer momento.
### 2. Mensagens em Tempo Real 💬
- Envio e Recebimento de Mensagens: Troca instantânea de mensagens entre usuários.
- Notificações de Nova Mensagem 🔔: O sistema notifica o usuário sempre que há uma nova mensagem.
### 3. Lista de Contatos 📋
- Exibição de Usuários Online: Visualize em tempo real quem está online.
- Filtragem de Contatos Online: Mostre apenas os usuários que estão online para facilitar a comunicação.
### 4. Conversa Privada 💌
- Seleção de Contatos: Clique em um contato da lista para iniciar uma conversa privada.
- Status de Leitura: As mensagens são exibidas com a identificação do remetente, e o status online/offline do usuário é mostrado.
### 5. Armazenamento Persistente de Dados 💾
- Autenticação com Cookies: Permite manter o usuário autenticado mesmo após o recarregamento da página.
- Tokens de Autenticação JWT: Gerencia a autenticação via tokens armazenados em cookies para segurança.
### 6. UI e Design Responsivo 📱💻
- Layout Responsivo: A interface é otimizada para diferentes tamanhos de tela, utilizando Tailwind CSS.
- Componentes Customizados: Botões, campos de entrada e notificações interativas.
### 7. Notificações de Sistema ⚡
- Notificação de Sucesso e Erro: Exibe mensagens de notificação para o usuário, usando React Hot Toast para interações em tempo real.
### 8. Proteção de Rotas 🔒
- Autenticação de Rotas: Apenas usuários autenticados podem acessar certas rotas e funcionalidades, garantindo segurança na navegação.

## Tecnologias Utilizadas 🛠️
O projeto foi desenvolvido utilizando tecnologias modernas para garantir uma experiência de chat rápida e segura.

- React: Framework JavaScript para construção da interface de usuário.
- Node.js e Express: Ambiente backend e framework para criação das APIs.
- Socket.IO: Comunicação em tempo real entre o frontend e o backend.
- Tailwind CSS: Framework CSS para criar layouts responsivos e estilos flexíveis.
- DaisyUI: Biblioteca de componentes de interface de usuário para Tailwind CSS.
- React Hot Toast: Exibe notificações de forma interativa e elegante.
- JWT (JSON Web Tokens): Para autenticação e controle de sessões do usuário.
- cookie-parser: Middleware para ler cookies enviados pelo cliente.
- CORS: Middleware para permitir comunicação entre origens diferentes (frontend e backend).
- express.json: Middleware para processar dados JSON em requisições.
- BcryptJS: Utilizado para criptografar senhas dos usuários, garantindo maior segurança.

## Funcionalidades de Middleware 🔧
O backend usa middlewares para adicionar funcionalidades extras e proteger a comunicação entre o cliente e o servidor:

- cookie-parser: Middleware para ler cookies, essencial para autenticação de usuários.
- cors: Permite que o frontend, rodando em uma origem diferente, se conecte ao backend de forma segura.
- express.json: Middleware para ler o corpo das requisições em formato JSON.
- Autenticação JWT: Middleware de autenticação que garante que apenas usuários autenticados possam acessar rotas específicas.

---

##  Contribuição 🤝

Sinta-se à vontade para contribuir com melhorias para o projeto. Faça um fork, crie uma nova branch para suas alterações e envie um pull request. 🙌 

## Contato 📞 

<div>
    <a href="https://www.linkedin.com/in/ribeirothales/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="mailto:thales.o.ribeiro@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
