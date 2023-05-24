import Image from 'next/image';

import Avatar from 'public/images/avatar-michelle.jpg';

import Share from '../info/share/share.component';

export default function Author() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <Image
          src={Avatar}
          alt="Photograph of the article author, Michelle Appleton"
          className="aspect-square w-10 rounded-full"
        />
        <div>
          <p className="font-bold text-very-dark-grayish-blue">
            Michelle Appleton
          </p>
          <p className="text-grayish-blue">28 Jun 2020</p>
        </div>
      </div>
      <Share />
    </div>
  );
}
