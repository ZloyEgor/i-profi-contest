export const filter = <T extends Object>(entity: T, keys: string[], endKey: string) => {
  const isAllReadyKeysFit = keys.every((searchKey) =>
    Object.values(entity).some(value => value === searchKey))

  const restFields = Object.values(entity).filter(value => keys.every(searchKey => searchKey !== value));

  const isEndKeyFit = restFields.some(value => typeof value === 'string' && value.startsWith(endKey));

  return isAllReadyKeysFit && isEndKeyFit;
}