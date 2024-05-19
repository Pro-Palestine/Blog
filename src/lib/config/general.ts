import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Who am i',
      link: '/who-am-i'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Instagram',
      link: 'https://www.instagram.com/pro.palestine32/'
    },
    {
      text: 'Github',
      link: 'https://github.com/Pro-Palestine'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
