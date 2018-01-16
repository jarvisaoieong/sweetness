import request from '../utils/request'

export async function fetchWeight() {
  const data = await request('http://utility-api.ersinfotech.com/candyweight')
  return []
}
