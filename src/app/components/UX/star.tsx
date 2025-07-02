import { StarFourIcon } from "@phosphor-icons/react/dist/ssr";

export default function Star() {
  return (
        <StarFourIcon
          size={32}
          weight="fill"
          className="fill-white text-white hover:fill-yellow-500 hover:text-yellow-500 transition-colors duration-300"
        />
  );
}
