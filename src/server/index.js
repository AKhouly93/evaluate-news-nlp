const mockAPI = require('./mockAPI.js')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const FormData = require('form-data');
const dotenv = require('dotenv');
dotenv.config();
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));
// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('running on port 3000!');
})

app.post('/evaluate', async (req, res)=>{
    const formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("lang", "en");
    formData.append("url", req.body.URL);
    const options = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      };
   const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', options)
   try {
        const result = await response.json();
        res.send(
            {
                'scoreTag' : result.score_tag, 
                'confidence' : result.confidence,
                'subjectivity' : result.subjectivity,
                'agreement' : result.agreement
            }
        );
    }catch(error) {
        console.log("error", error);
    } 

});

app.get('/test', function (req, res) {
    res.send(mockAPI);
})