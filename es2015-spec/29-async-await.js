import ajax from './25-promise'

async function fetchAsync () {
  try {
    const res = await ajax('api/user.json')

    console.log(res)
  }catch(e) {
    console.log(e)
  }
}

fetchAsync()