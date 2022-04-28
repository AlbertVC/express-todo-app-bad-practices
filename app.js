// === imports == //
bodyParser = require('body-parser')
var env = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: './' + env + '.env'
});

// === initialisation == //
app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT

//--access env variables == //



// === run app == //
app.listen(PORT, () => console.log(`Example app running!`))