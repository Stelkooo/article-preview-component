'use client';

import Image from 'next/image';

import { Variants, motion } from 'framer-motion';

import Drawers from 'public/images/drawers.jpg';

import Author from '@/components/author/author.component';
import Info from '@/components/info/info.component';

export default function Home() {
  const articleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <main className="h-full bg-light-grayish-blue">
      <div className="grid h-full place-content-center">
        <motion.article
          variants={articleVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xs overflow-hidden rounded-lg.5 bg-white drop-shadow-article lg:flex lg:h-[280px] lg:max-w-3xl lg:overflow-visible"
        >
          <figure>
            <Image
              src={Drawers}
              alt="Photograph of a green drawer against a brick wall painted over in white with a couple of picture frames placed on top as well as a plant in a brown vase"
              className="h-[200px] w-full rounded-t-lg.5 object-cover object-[center_25%] lg:h-full lg:min-w-[285px] lg:rounded-l-lg.5 lg:rounded-tr-none lg:object-left"
            />
          </figure>
          <div className="relative flex flex-col gap-8 px-8 pb-5 pt-[36px] lg:justify-between lg:gap-0 lg:px-10 lg:py-8">
            <Info />
            <Author />
          </div>
        </motion.article>
      </div>
    </main>
  );
}
