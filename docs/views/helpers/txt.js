module.exports = (number) => {
  const sample =  'The quick brown fox jumps over the lazy dog. '
  let txt =  ''
  for(let i = 0; i < number; i++) { txt += sample }
  return txt
}
