export const calculate_offset = (data) => {
  let dataLength = data.length;
  let translateX = 25;
  let midPoint = Math.ceil(dataLength / 2);
  // console.log("Midpoint " + midPoint);
  for (let i = midPoint; i >= 0; i--) {
    data[i] = { ...data[i], translate: translateX };
    translateX -= 50;
  }
  let translateXUp = 75;
  for (let i = midPoint + 1; i < data.length; i++) {
    data[i] = { ...data[i], translate: translateXUp };
    translateXUp += 50;
  }

  return data;
};
