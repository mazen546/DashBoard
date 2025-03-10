interface PropTypes {
  category: string;
  title: string;
}
const Header = ({ category, title }: PropTypes) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 dark:text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200 ">
        {title}
      </p>
    </div>
  );
};

export default Header;
