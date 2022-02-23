# Imagem de Origem
FROM node:14-alpine

# Instala pacotes no container alpine
RUN apk update && apk add --no-cache curl vim wget bash

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN yarn --silent

# expondo porta que vai rodar
EXPOSE 3000

# Inicializa a aplicação
CMD ["yarn", "start"]
