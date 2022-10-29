export type IconsId =
  | 'logo';

export type IconsKey =
  | 'Logo';

export enum Icons {
  Logo = 'logo',
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Logo]: '61697',
};
