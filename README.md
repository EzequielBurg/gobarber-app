# GoBarber - Web (Resume)

This project is developed through GoStack Bootcamp, offered by Rocketseat.

It represents an app for a barber shop.

For to run this project, you need to have a connection with postgres in 5432 port (I'm using a simple docker run).

After this, run yarn dev:server and test the routes by Insomnia or Postman.

# GoBarber - Web (Functionalities [PT-BR])

# Funcionalidades Macro:

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve pdoer resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente dev;
- Utilizar Amazon SES para envios em produção;
- O envio de email deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para recuperar senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do Perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar sua senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

# Painel do prestador (aplicação desktop)

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real em Socket.io;

**RN**

- A notificaçõa deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços (aplicação mobile)

**RN**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve duar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h da manhã às 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
