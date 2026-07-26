function getLuminance(hex) {
  let rgb = hex.replace("#", "");
  if (rgb.length === 3) rgb = rgb.split("").map(c => c + c).join("");
  let [r, g, b] = [0, 2, 4].map(p => parseInt(rgb.substring(p, p + 2), 16) / 255);
  let [R, G, B] = [r, g, b].map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function getContrast(hex1, hex2) {
  let lum1 = getLuminance(hex1);
  let lum2 = getLuminance(hex2);
  let brightest = Math.max(lum1, lum2);
  let darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const tests = {
  p1_darker1: "#555DFF",
  p1_darker2: "#4D55F2",
  p1_darker3: "#454DE5",
  p1_darker4: "#3B42CC",
  muted_darker1: "#64748B",
  muted_darker2: "#5A6987",
  muted_darker3: "#4D5D7A"
};

console.log("Contrast ratios against WHITE (#ffffff):");
for (let [name, hex] of Object.entries(tests)) {
  let ratio = getContrast("#ffffff", hex).toFixed(2);
  console.log(`${name} (${hex}): ${ratio}:1 ${ratio >= 4.5 ? '✅ AA' : ratio >= 3 ? '⚠️ Large Text' : '❌ FAIL'}`);
}
