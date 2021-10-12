import fetch from "node-fetch"
import faker from "faker"


const url = "https://discordrgift.com/discord/login"

const randBool = () => !!Math.round(Math.random())
const randInt = (max) => Math.floor(Math.random() * max)

const sendReq = async () => {
  // let username = faker.internet.userName().replace(/\./g, "")
  let email = faker.internet.email()
  let password
  let userAgent = faker.internet.userAgent()
  let referrer = `https://discordrgift.com/FGk22Djqo54s`



  if(randBool()) {
    password = faker.internet.password()
  } else {
    password = `${faker.random.words(randInt(3) + 1).replace(/[ -]/g, "")}${randBool() ? randInt(10000) : ""}`
  }


  const res = await fetch(url, {
    "credentials": "include",
    "headers": {
      "User-Agent": userAgent,
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "Sec-GPC": "1"
    },
    "referrer": referrer,
    "body": JSON.stringify({
      login: email,
      password,
    }),
    "method": "POST",
    "mode": "cors"
  })

  console.log(`---\n${email} : ${password}\n${userAgent}\n${referrer}`)
  console.log(res.status)
}

setInterval(sendReq, 500)