const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./login')
const app = express()
const port = 3000

// setting template enging
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))


// 設定網頁路由
// localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})

// 登入頁面使用post方法
app.post('/', (req, res) => {
  const account = req.body
  console.log(account)
  const userInfo = loginCheck(account)
  console.log(loginCheck(account))

  // 如果帳號密碼有錯誤回傳index錯誤訊息頁面
  // 正確回傳login_ok頁面
  if (userInfo === '帳號或密碼輸入有誤') {
    let errorMassage = '-帳號或密碼輸入有誤'
    res.render('index', { errorMassage: errorMassage, account: account })
  } else {
    res.render('login_ok', { userInfo: userInfo })
  }
})

// 設定網站port號
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})


