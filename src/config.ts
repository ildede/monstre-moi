export const HEADS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  .map((e) => {
    return {
      url: `/images/Heads/head_${e}.png`,
      id: `head${e}`
    }
  });

export const TOPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  .map((e) => {
    return {
      url: `/images/Tops/body_${e}.png`,
      id: `top${e}`
    }
  });

export const BOTTOMS = [1, 2, 3, 4, 5, 6, 7]
  .map((e) => {
    return {
      url: `/images/Bottoms/legs_${e}.png`,
      id: `bottom${e}`
    }
  });

export function partsLoader() {
  const runHEAD = HEADS.sort(() => 0.5 - Math.random());
  const runTOP = TOPS.sort(() => 0.5 - Math.random());
  const runBOTTOM = BOTTOMS.sort(() => 0.5 - Math.random());

  return {
    heads: runHEAD,
    tops: runTOP,
    bottoms: runBOTTOM
  };
}
