
async function getAccount() {
  return await fetch(
    'http://127.0.0.1:8080/api/account'
    ).then(res => res.json())
}

async function m1() {
  return await getAccount() 
}

async function m2() {
  return await m1()
}

async function m3() {
  return await m2()
}

async function main() {
  const m = await m3()
  console.log(m);
  return m
}

main()