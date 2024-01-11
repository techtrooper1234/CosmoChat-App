const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

/*
// For OpenAi
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration{{
    apiKey:
}}

const openai = new OpenAiApi(config);
*/

// set up server
const app = express();
app.use(bordyParser.json());
app.use(cors());

// endpoint for Ai
app.post("/chat", async (req, res) => {

    const completrion = await OpenAI.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature : 0,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);

})

const port = 8585;
app.listen(port, () => {
    console.log('Server listening on port ${port}');
});