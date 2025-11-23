import { Link, useMatch } from "react-router";
import styles from "./CustomLink.module.css";
import classNames from "classnames";

interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const CustomLink = ({
  children,
  to,
  className,
  ...props
}: CustomLinkProps) => {
  const match = useMatch(to);
  const style = classNames(styles.base, className, { [styles.active]: match });
  return (
    <Link to={to} {...props} className={style}>
      {children}
    </Link>
  );
};
