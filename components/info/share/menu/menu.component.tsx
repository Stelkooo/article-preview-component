'use client';

import Link from 'next/link';
import Image from 'next/image';

import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

import Button from '../button/button.component';

import { socialMedia } from './constants';

type Props = {
  onClickFunc: () => void;
};

export default function Menu({ onClickFunc }: Props) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const divVariants: Variants = {
    hidden: {
      y: isDesktop ? 10 : '100%',
      left: '50%',
      translateX: '-50%',
      opacity: isDesktop ? 0 : 1,
    },
    visible: {
      y: 0,
      left: '50%',
      translateX: '-50%',
      opacity: 1,
      transition: {
        type: 'tween',
      },
    },
    exit: {
      y: isDesktop ? 10 : '100%',
      left: '50%',
      translateX: '-50%',
      opacity: isDesktop ? 0 : 1,
      transition: {
        type: 'tween',
      },
    },
  };
  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-between rounded-b-lg.5 bg-very-dark-grayish-blue px-8 lg:bottom-14 lg:h-14 lg:w-[248px] lg:rounded-lg.5"
    >
      <div className="z-50 flex gap-5">
        <p className="uppercase tracking-[5px] text-grayish-blue">Share</p>
        <div className="flex gap-4">
          {socialMedia.map((item) => (
            <Link href={item.href} key={item.name}>
              <Image
                src={item.src}
                alt={`Click here to share this post to ${item.name}`}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <Button onClickFunc={onClickFunc} />
      </div>
      <div className="absolute -bottom-2 left-1/2 hidden aspect-square w-6 -translate-x-1/2 rotate-45 bg-very-dark-grayish-blue lg:block" />
    </motion.div>
  );
}
