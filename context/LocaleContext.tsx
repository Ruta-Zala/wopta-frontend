import React, { useEffect, createContext, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { defaultLocale } from '../locales'

interface ContextProps {
  readonly locale: string
  readonly setLocale: (locale: string) => void
}

export const LocaleContext = createContext<ContextProps>({
  locale: defaultLocale,
  setLocale: () => null,
})

export const LocaleProvider: FC<{ lang: string }> = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang)
  const { query } = useRouter()

  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  useEffect(() => {
    if (
      typeof query.lang === 'string' &&
      locale !== query.lang
    ) {
      setLocale(query.lang)
    }
  }, [query.lang, locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
