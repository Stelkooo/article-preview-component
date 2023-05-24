import Info from '@/components/info/info.component';
import Image from 'next/image';

import Drawers from 'public/images/drawers.jpg';
import Author from '@/components/author/author.component';

export default function Home() {
  return (
    <main className="h-full bg-light-grayish-blue">
      <div className="grid h-full place-content-center">
        <article className="max-w-xs overflow-hidden rounded-[10px] bg-white drop-shadow-article lg:flex lg:h-[280px] lg:max-w-3xl">
          <figure>
            <Image
              src={Drawers}
              alt="Photograph of a green drawer against a brick wall painted over in white with a couple of picture frames placed on top as well as a plant in a brown vase"
              className="h-[200px] w-full object-cover object-[center_25%] lg:h-full lg:min-w-[285px] lg:object-left"
            />
          </figure>
          <div className="flex flex-col gap-8 px-8 pb-5 pt-[36px] lg:justify-between lg:px-10 lg:py-8">
            <Info />
            <Author />
          </div>
        </article>
      </div>
    </main>
  );
}
