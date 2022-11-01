export type IconsId =
  | 'close'
  | 'linkedin'
  | 'logo'
  | 'menu';

export type IconsKey =
  | 'Close'
  | 'Linkedin'
  | 'Logo'
  | 'Menu';

export enum Icons {
  Close = 'close',
  Linkedin = 'linkedin',
  Logo = 'logo',
  Menu = 'menu',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Close]: '61697',
  [Icons.Linkedin]: '61698',
  [Icons.Logo]: '61699',
  [Icons.Menu]: '61700',
};
