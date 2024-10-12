import express from 'express';
import cors from 'cors';
import axios from 'axios'

const PORT = 4000;
const app = express();

app.use(cors())

app.get('/search', async (req, res) => {

 
  const API_KEY = "f4797aa0fa6ddb2bb7d0cc664f844eb03b574b2142745a0db74a6c59fff65781";
    const URL = "https://serpapi.com/search.json"
    
    const { query } = req.query;
    
    try{
        const response = await axios.get(URL, {
            params: {
                q: query,
                engine: "google",
                google_domain: "google.com.br",
                api_key: API_KEY,
                hl: "pt-br",
                gl: "br",
                num: 10, 
              },
            });
            
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "ocorreu um erro ao fazer a requisição à API" });
    }
});

app.listen(PORT, () => {
    console.log(`O proxy está rodando na porta ${PORT}`);
});