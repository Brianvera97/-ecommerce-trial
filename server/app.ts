import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://159.203.114.43',
    'http://159.203.114.43:3000',
    'http://cloudbizpy.com',
    'https://cloudbizpy.com',
    'https://www.cloudbizpy.com'
  ]
}));



const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rutas irán aquí

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
