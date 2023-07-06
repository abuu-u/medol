export const cn = (...classes: (string | boolean | undefined)[]): string =>
  classes.filter((x) => typeof x === 'string').join(' ')

export const phoneMask = (phone: string): string =>
  `${phone.slice(0, 4)} (${phone.slice(4, 6)}) ${phone.slice(
    6,
    9,
  )}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`
