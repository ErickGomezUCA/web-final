# Etapa 1: Construcción de la aplicación React
FROM node:18-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala todas las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir con Node.js
FROM node:18-alpine

WORKDIR /app

# Instala solo las dependencias necesarias para producción
COPY package*.json ./
RUN npm install --only=production

# Copia la carpeta 'build' desde la etapa de construcción
COPY --from=build /app/build ./build

# Agrega el servidor Express (debes tener un archivo `server.js`)
COPY server.js .

# Expone el puerto para el servidor
EXPOSE 3000

# Inicia el servidor
CMD ["node", "server.js"]
