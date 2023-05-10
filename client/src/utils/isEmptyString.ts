import { isNullOrUndefined } from '@/utils'

const isEmptyString = (prop: string) => isNullOrUndefined(prop) || prop === ''
export default isEmptyString
