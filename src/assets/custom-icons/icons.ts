export type IconsId =
  | 'linkedin'
  | 'logo';

export type IconsKey =
  | 'Linkedin'
  | 'Logo';

export enum Icons {
  Linkedin = 'linkedin',
  Logo = 'logo',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Linkedin]: '61697',
  [Icons.Logo]: '61698',
};
