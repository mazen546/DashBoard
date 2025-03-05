import { useStateContext } from "../contexts/ContextProvider";
interface PropTypes {
  bgColor: string;
  bgHover?: string;
  size?: string;
  color: string;
  text: string;
  borderRadius: string;
  backgroundColor?: string;
  width?: string;
}
const Button = ({
  icon,
  bgColor,
  color,

  size,
  text,
  borderRadius,
  width,
}: PropTypes) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl }`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
