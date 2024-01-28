const toHex = component => Math.max(0, Math.min(255, component)).toString(16).padStart(2, '0');

const scaleRGB = (hexCode, scale) => {
  const rgbValue = [
    parseInt(hexCode.slice(1, 3), 16),
    parseInt(hexCode.slice(3, 5), 16),
    parseInt(hexCode.slice(5, 7), 16)
  ]
  const scaledRgbValue = rgbValue.map(v => parseInt(v * scale))
  return `#${toHex(scaledRgbValue[0])}${toHex(scaledRgbValue[1])}${toHex(scaledRgbValue[2])}`
}

export default scaleRGB;