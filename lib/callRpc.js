const RPC_URI = 'http://127.0.0.1:8000'

const callRpc = async (relativePath, method, body) => {
  const response = await fetch(
    `${RPC_URI}/${relativePath}`,
    {
      method: method || 'GET',
      contentType: 'application/json',
      body: body ? JSON.stringify(body) : undefined
    }
  )
  
  return await response.json();
}

export default callRpc;