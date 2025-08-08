import cn from './lang/cn'

export function t(key) {
  const LOCALE_KEY = 'CUSDIS_LOCALE'

  const locale = window[LOCALE_KEY] || cn

  const content = locale[key] || cn[key]
  if (!locale[key]) {
    console.warn(
      '[cusdis]',
      'translation of language key',
      `'${key}'`,
      'is missing.',
    )
  }
  return content
}
