export default {
  getDataToView: ({ phi, lambda, date, time }) => ({
    phi: `${phi.degs}°${phi.mins}'${phi.direction}`,
    lambda: `${lambda.degs}°${lambda.mins}'${lambda.direction}`,
    date,
    time
  })
}
