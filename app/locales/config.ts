export type Language = 'it' | 'en' | 'cn'

type LanguageConfig = {
  label: string
  icon: {
    src: string
    alt: string
  }
}

export const LanguagesConfig: Record<Language, LanguageConfig> = {
  it: {
    label: 'Italiano',
    icon: {
      src: 'assets/flags/it.svg',
      alt: 'Italiano',
    },
  },
  en: {
    label: 'English',
    icon: {
      src: 'assets/flags/en.svg',
      alt: 'English',
    },
  },

  cn: {
    label: '中文',
    icon: {
      src: 'assets/flags/cn.svg',
      alt: '中文',
    },
  },
}

export const Languages = Object.keys(LanguagesConfig) as Language[]
