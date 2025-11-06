/**
 * エリの気分をランダムに取得します。
 * @returns エリの気分
 * @throws エリが予期しないエラーに遭遇した場合
 */
export const getEriFeeling = (): string => {
  const randomNum = Math.random();

  if (randomNum < 0.5) {
    return "Eri is feeling happy!";
  } else {
    throw new Error("Eri is RAGING!!!");
  }
};
