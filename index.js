const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

// Conn
const conn = require('./db/conn')
const app = express()

// Models
const Tought = require('./models/Tought')
const User = require('./models/User')

// Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

//Import Controller
const ToughtController = require('./controllers/ToughtController')

// Body res
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Session
app.use(session({
    name: "session",
    secret: "guessthesecret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function() {},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }
}))

// Flash messages
app.use(flash())

// Public path
app.use(express.static('public'))

// Set session to res
app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session
    }
    next()
})

// Routes
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
app.get('/', ToughtController.showToughts)

// Conn
conn
.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))