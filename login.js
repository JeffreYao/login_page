// 使用者帳號密碼
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]


function loginCheck(info) {
  // check email & password
  let matchedItem = users.find((item) => item.email === info.email && item.password === info.password)

  // 如果帳號密碼錯誤把matchedItem 改成'帳號或密碼輸入有誤'並回傳
  if (matchedItem === undefined) {
    return matchedItem = '帳號或密碼輸入有誤'
  }
  return matchedItem

}

// let info = {
//   email: 'natasha@gamil.om',
//   password: '*parol#@$!'
// }

// console.log(loginCheck(info));
// export generatePassword function for other files  to use
module.exports = loginCheck