1. Clonar repositorio
2. Ejecutar
```
yarn install
```
3. Tener NestCLI instalado
```
npm i -g @nestjs/cli
```
4. Clonar archivo ```.env.template``` y renombrar la copioa a ```.env```

5. LLenar variables de entorno definidas en el ```.env```
7. Ejecutar la aplicacion en dev:
```
yarn start:dev
```
8. Llamar metodo GET http://localhost:3001 respuesta:
```
Hello World!
```

## Production Build

1. Crear archivo ```.env```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen

docker-compose -f docker-compose.prod.yaml up --build
