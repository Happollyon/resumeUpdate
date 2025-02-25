// filepath: /workspaces/resumeUpdate/my-react-app/backend/src/controllers/apiController.js
const fetch = require('node-fetch');
const sec = require('../../../src/pages/sec.json');
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey:sec.key });

const queryAPI = async (req, res) => {



const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
    store: true,
});

  res.send(completion.choices[0].message)
};



module.exports = { queryAPI };