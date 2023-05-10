import { capitalize, isEmptyString } from '@/utils'

function titleFromName(name: string) {
  if (isEmptyString(name)) return ''
  return name
    .split(/(?=[A-Z])|\s/)
    .map((s: string) => capitalize(s))
    .join(' ')
}

export default titleFromName
