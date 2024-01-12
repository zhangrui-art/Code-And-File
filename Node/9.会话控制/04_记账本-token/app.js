var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')

const { DBHOST, DBPORT, DBNAME } = require('./config/config')

var indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const accountRouter = require('./routes/api/account');
const authApiRouter = require('./routes/api/auth');

var app = express();
app.use(session({
  name: 'sid', // 设置cookie的name，默认值是connect.sid
  secret: 'dapao', // 参与加密的字符串（又称签名）
  saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
  resave: true,  // 是否每次请求时都重新保存session
  store: MongoStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`,
    collection: 'sessions'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,  // * 60 * 24 * 7// 设置sessionId的过期时间，单位毫秒
    httpOnly: true, // 是否只用于http请求中获取，默认值是true， 开启后前端无法通过js操作

  }
}))
app.all('/*', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next()
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/',authRouter)
app.use('/api', accountRouter)
app.use('/api', authApiRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
