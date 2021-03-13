import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { NavItem as NavItemModel } from '../../models';

interface Props {
  key?: number | string;
  item: NavItemModel;
}

const NavItem: FunctionComponent<Props> = ({ key, item }) => {
  const { pathname } = useLocation();
  const isActive = item.url.toLowerCase() === pathname.toLowerCase();

  const classes = classNames('ns-nav-link', {
    'ns-active': isActive,
  });

  return (
    <li className="ns-nav-item" key={key}>
      <Link to={item.url} target={item.target} className={classes}>
        {item.text}
        <span className="ns-underline" />
      </Link>
    </li>
  );
};

export default NavItem;
