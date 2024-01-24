
function getAccount() {
  console.log(fetch);
  return fetch(
    'http://127.0.0.1:8080/api/account'
    )
}

function m1() {
  return getAccount() 
}

function m2() {
  return m1()
}

function m3() {
  return m2()
}

function main() {
  const m = m3()
  console.log("d",m);
}

function run (func) {
  let cache = []
  let i = 0  
  const _originalFetch = window.fetch
  window.fetch = (...args) => {
    // 如果缓存结果存在，交付缓存结果
    if(cache[i]) {
      if(cache[i].status === 'fulfilled'){
        return cache[i].data
      }
      else if ( cache[i].status === 'rejected'){
        throw cache[i].err
      }
    }
    const result = {
      status: 'pending',
      data: null,
      err: null
    }
    cache[i++] = result

    // 发送请求
    const prom = _originalFetch(...args).then(resp => resp.json()).then(
        resp => {
          result.status = 'fulfilled',
          result.data = resp
        },
        err => {
          result.status = 'rejected',
          result.err = err
        }
      )
    // 报错
    throw prom
  }
  try {
    func()
    
  } catch (error) {
    if(error instanceof Promise) {
      const reRun = () => {
        i = 0
        func()
      }
      error.then(reRun, reRun)
    }
  }
}

run(main)