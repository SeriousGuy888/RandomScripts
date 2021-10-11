import fetch from "node-fetch"
import faker from "faker"


const url = "https://steamsdiscord.com/login/dologin"

const randBool = () => !!Math.round(Math.random())
const randInt = (max) => Math.floor(Math.random() * max)

const sendReq = async () => {
  let username = faker.internet.userName().replace(/\./g, "")
  let password
  let userAgent = faker.internet.userAgent()
  // let referrer = "https://steamsdiscord.com/zbd4a5a8d2q0lLPv6lC6PKnQCqV4Vi6AITXzlz79FYuWMQV4NdY4HutuA"
  let referrer = `https://steamsdiscord.com/zbd4a5a8d2${faker.random.alphaNumeric(47)}`



  if(randBool()) {
    password = faker.internet.password()
  } else {
    password = `${faker.random.words(randInt(3) + 1).replace(/[ -]/g, "")}${randBool() ? randInt(10000) : ""}`
  }


  const res = await fetch(url, {
    "credentials": "include",
    "headers": {
      "User-Agent": userAgent,
      "Accept": "*/*",
      "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin"
    },
    "referrer": referrer,
    "body": `username=${username}&password=${password}`,
    "method": "POST",
    "mode": "cors"
  })

  console.log(`---\n${username} : ${password}\n${userAgent}\n${referrer}`)
  console.log(await res.json())
}

setInterval(sendReq, 500)