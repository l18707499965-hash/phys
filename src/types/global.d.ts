export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    __piaohua_download?: number;
  }
}