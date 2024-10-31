import localFont from 'next/font/local';

export const sourceSansPro = localFont({
  variable: '--font-source-sans-pro',
  fallback: ['system-ui', 'arial'],
  preload: true,
  display: 'swap',
  src: [
    {
      path: './SourceSansPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SourceSansPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './SourceSansPro-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './SourceSansPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SourceSansPro-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SourceSansPro-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});
