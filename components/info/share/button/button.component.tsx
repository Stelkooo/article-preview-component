type Props = {
  isDark?: boolean;
  onClickFunc: () => void;
  isMenuOpen?: boolean;
};

export default function Button({
  isDark = false,
  onClickFunc,
  isMenuOpen = false,
}: Props) {
  return (
    <button
      type="button"
      className={`group/share grid aspect-square w-8 place-content-center rounded-full ${
        isDark || isMenuOpen
          ? 'bg-desaturated-dark-blue'
          : 'bg-light-grayish-blue hover:bg-desaturated-dark-blue'
      } transition-colors`}
      onClick={onClickFunc}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path
          className={`transition-colors ${
            isDark || isMenuOpen
              ? 'fill-white'
              : 'fill-desaturated-dark-blue group-hover/share:fill-white'
          }`}
          d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
        />
      </svg>
      <span className="sr-only">
        Click to open up the socials menu to share this post to Facebook,
        Twitter, or Pinterest
      </span>
    </button>
  );
}
