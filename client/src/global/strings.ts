export const isNullOrUndefined = (prop: unknown) => prop === null || prop === undefined

export const isEmptyString = (prop: string) => isNullOrUndefined(prop) || prop === ''

export const capitalize = (word: string) => word.charAt(0).toUpperCase()
  + word.slice(1).toLowerCase()

export function titleFromName(name: string) {
  if (isEmptyString(name)) return ''
  return name
    .split(/(?=[A-Z])|\s/)
    .map((s: string) => capitalize(s))
    .join(' ')
}
