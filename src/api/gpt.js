import axios from 'axios';


const gpt = axios.create({
    baseURL: 'https://api.openai.com/v1/engines/davinci/completions',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

export default gpt;
