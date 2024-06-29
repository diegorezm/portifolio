type Props = {
  title: string;
  path: string;
  isMobile?: boolean;
  onClick?: () => void;
}
const NavItem = ({ title, path, isMobile = false, onClick = () => { } }: Props) => {
  return (
    <a href={path}
      className={`text-cls-foreground-secondary hover:text-cls-foreground ${isMobile && "text-center h-full w-full p-3 hover:bg-cls-grey"}`}
      onClick={onClick}
    >
      {title}
    </a >
  );
};

export default NavItem;
