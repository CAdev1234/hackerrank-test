function aladdin(magic, dist) {
  if (magic.reduce((a, b) => a + b, 0) < dist.reduce((a, b) => a + b, 0)) return -1
  const len = magic.length
  let total = 0
  let result = 0
  for (let idx = 0; idx < len; idx++) {
    if (total < 0) {
      result = i
      total = 0  
    }            
    total += (magic[i] - dist[i])
  }

  return result
}    
