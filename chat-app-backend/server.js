const path = require('path')
const express = require("express")
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = 5050;
const cors = require("cors")
const bodyParser = require("body-parser")

connectDB();

/*
// For OpenAi
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration{{
    apiKey:
}}

const openai = new OpenAiApi(config);
*/

// set up server
const app = express()

app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb+srv://techtroopers:techtroopers123@techtrooperscluster.wbv9mtt.mongodb.net/chatappdb?retryWrites=true&w=majority');

app.use('/api/chats', require('./routes/chatRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve frontend
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}


app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on port ${port}`))


// Error Handler to overide default express error handler app.use(errorhandler)
/*
app.use(bordyParser.json());
app.use(cors());
*/

// endpoint for Ai
/*
app.post("/chat", async (req, res) => {

    const completrion = await OpenAI.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature : 0,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);


})
*/
