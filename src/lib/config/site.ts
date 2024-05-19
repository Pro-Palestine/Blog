import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'propalestine.netlify.app',
  title: 'Pro Palestine',
  subtitle: 'An Idea to help Palestinians',
  lang: 'en-US',
  description: '',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Hany',
    status: '🇵🇸',
    bio: 'A computer science Paki student trying to do something. This site is under production'
  },
  themeColor: '#3D4451'
}
