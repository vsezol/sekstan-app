export default results => {
  const sums = results.reduce(
    (prev, curr) => ({
      sumOC: prev.sumOC + curr.OC,
      sumT: prev.sumT + curr.T,
      count: prev.count + 1
    }),
    {
      sumOC: 0,
      sumT: 0,
      count: 0
    }
  )
  const avs = {
    avOC: Math.round((sums.sumOC / sums.count) * 1000) / 1000,
    avT: Math.round((sums.sumT / sums.count) * 1000) / 1000
  }
  return avs
}
