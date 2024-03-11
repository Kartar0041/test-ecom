export type FantaiconId =
  | 'clubhouse'
  | 'discord'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'lit_it'
  | 'medium'
  | 'quora'
  | 'reddit'
  | 'telegram'
  | 'tiktok'
  | 'twitch'
  | 'twitter'
  | 'viber'
  | 'website'
  | 'whatsapp'
  | 'youtube';

export type FantaiconKey =
  | 'Clubhouse'
  | 'Discord'
  | 'Facebook'
  | 'Instagram'
  | 'Linkedin'
  | 'LitIt'
  | 'Medium'
  | 'Quora'
  | 'Reddit'
  | 'Telegram'
  | 'Tiktok'
  | 'Twitch'
  | 'Twitter'
  | 'Viber'
  | 'Website'
  | 'Whatsapp'
  | 'Youtube';

export enum Fantaicon {
  Clubhouse = 'clubhouse',
  Discord = 'discord',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  LitIt = 'lit_it',
  Medium = 'medium',
  Quora = 'quora',
  Reddit = 'reddit',
  Telegram = 'telegram',
  Tiktok = 'tiktok',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Viber = 'viber',
  Website = 'website',
  Whatsapp = 'whatsapp',
  Youtube = 'youtube',
}

export const FANTAICON_CODEPOINTS: { [key in Fantaicon]: string } = {
  [Fantaicon.Clubhouse]: '61697',
  [Fantaicon.Discord]: '61698',
  [Fantaicon.Facebook]: '61699',
  [Fantaicon.Instagram]: '61700',
  [Fantaicon.Linkedin]: '61701',
  [Fantaicon.LitIt]: '61702',
  [Fantaicon.Medium]: '61703',
  [Fantaicon.Quora]: '61704',
  [Fantaicon.Reddit]: '61705',
  [Fantaicon.Telegram]: '61706',
  [Fantaicon.Tiktok]: '61707',
  [Fantaicon.Twitch]: '61708',
  [Fantaicon.Twitter]: '61709',
  [Fantaicon.Viber]: '61710',
  [Fantaicon.Website]: '61711',
  [Fantaicon.Whatsapp]: '61712',
  [Fantaicon.Youtube]: '61713',
};
