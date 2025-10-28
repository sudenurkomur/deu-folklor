/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_CONTACT_PHONE: string
  readonly VITE_CONTACT_ADDRESS: string
  readonly VITE_SOCIAL_INSTAGRAM: string
  readonly VITE_SOCIAL_YOUTUBE: string
  readonly VITE_SOCIAL_TWITTER: string
  readonly VITE_SOCIAL_FACEBOOK: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
