/* eslint-disable import/prefer-default-export */
import FacebookIcon from 'public/images/icon-facebook.svg';
import TwitterIcon from 'public/images/icon-twitter.svg';
import PinterestIcon from 'public/images/icon-pinterest.svg';

type SocialMedia = {
  name: string;
  href: string;
  src: string;
};

export const socialMedia: SocialMedia[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    src: FacebookIcon,
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com',
    src: TwitterIcon,
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com',
    src: PinterestIcon,
  },
];
