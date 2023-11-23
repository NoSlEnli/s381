if (process.env.NODE_ENV !=='production'){
  require('dotenv').config();
}
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const bcrypt=require('bcrypt')
const passport =require('passport')
const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
const flash =require('express-flash')

const users =[]

const session = require('express-session');
const connectDB = require('./server/config/db');
const { Passport } = require('passport');


const app = express();
const port = process.env.PORT || 8099;

 
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static('public'));


app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);


app.use(flash({ sessionKeyName: 'flashMessage' }));
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())


app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/customer'))
app.use(express.urlencoded({extended: false}))


app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login',passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/login',
  failureFlash: true
}));

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register',async (req,res) => {
  try{
      const hashedPassword = await bcrypt.hash(req.body.password,10)
      users.push({
        id:Date.now().toString(),
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
      })
      res.redirect('/login')
  } catch {
     res.redirect('/register')
  }
  console.log(users)
});

app.listen(port, ()=> {
  console.log(`App listeing on port ${port}`)
});
