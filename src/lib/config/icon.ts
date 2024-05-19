import type { Icon } from '$lib/types/icon'
import { site } from '$lib/config/site'

export const favicon: Icon = {
  src: site.protocol + site.domain + '/favicon.ico',
  sizes: '32x32',
  type: 'image/png'
}

export const any: { [key: number]: Icon } = {
  192: {
    src: site.protocol + site.domain + '/assets/any@192.png',
    sizes: '192x192',
    type: 'image/png'
  },
  384: {
    src: site.protocol + site.domain + '/assets/any@384.png',
    sizes: '384x384',
    type: 'image/png'
  }
}

export const maskable: { [key: number]: Icon } = {
  512: {
    src: site.protocol + site.domain + '/assets/prof.jpg',
    sizes: '1024x1024',
    type: 'image/jpg'
  }
}
