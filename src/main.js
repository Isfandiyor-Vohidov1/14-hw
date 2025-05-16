import express from 'express';
import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
