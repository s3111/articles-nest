#Atricles Nest

live demo https://cap.web2ua.com/

... still under construction :)

## How to checkout
- git clone

#### Server
- cd server
- cp .example.env .env , edit .env
- npm i
- npm run start:dev

##### Migrations & seeding
- npx mikro-orm migration:fresh --seed // refresh db and seed
- npx mikro-orm migration:fresh // only refresh db
- npx mikro-orm seeder:run // only seed 

#### Client
- cd client
- cp .example.env .env , edit .env
- npm i
- npm start



