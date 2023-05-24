import Image from 'next/image';

import FacebookIcon from 'public/images/icon-facebook.svg';
import TwitterIcon from 'public/images/icon-twitter.svg';
import PinterestIcon from 'public/images/icon-pinterest.svg';

import Button from '../button/button.component';

type Props = {
  onClickFunc: () => void;
};

export default function Menu({ onClickFunc }: Props) {
  return (
    <div className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-between rounded-b-[10px] bg-very-dark-grayish-blue px-8 lg:bottom-14 lg:left-1/2 lg:h-14 lg:w-[248px] lg:-translate-x-1/2 lg:rounded-[10px]">
      <div className="z-50 flex gap-5">
        <p className="uppercase tracking-[5px] text-grayish-blue">Share</p>
        <div className="flex gap-4">
          <Image
            src={FacebookIcon}
            alt="Click here to share this post to Facebook"
          />
          <Image
            src={TwitterIcon}
            alt="Click here to share this post to Twitter"
          />
          <Image
            src={PinterestIcon}
            alt="Click here to share this post to Pinterest"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <Button onClickFunc={onClickFunc} />
      </div>
      <div className="absolute -bottom-2 left-1/2 hidden aspect-square w-6 -translate-x-1/2 rotate-45 bg-very-dark-grayish-blue lg:block" />
    </div>
  );
}
