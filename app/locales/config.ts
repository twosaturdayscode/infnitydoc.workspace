export type Language = 'it' | 'en' | 'cn'

type LanguageConfig = {
  label: string
  icon: {
    src: string
    alt: string
  }
}

export const LanguagesConfig: Record<Language, LanguageConfig> = {
  'it': {
    label: 'Italiano',
    icon: {
      src: 'assets/flags/it.svg',
      alt: 'Italiano'
    }
  },
  'en': {
    label: 'English',
    icon: {
      src: 'assets/flags/en.svg',
      alt: 'English'
    }
  },

  // 'cn': {
  //   label: 'Chinese',
  //   icon: {
  //     src: 'assets/flags/cn.svg',
  //     alt: 'Chinese'
  //   }
  // }
}

export const Languages = Object.keys(LanguagesConfig) as Language[]
