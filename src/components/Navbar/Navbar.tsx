import { FunctionComponent } from 'react';
import { NavItem as NavItemModel } from '../../models';
import NavItem from './NavItem';

interface Props {
  items: NavItemModel[];
  onMenuClick: any;
}

const Navbar: FunctionComponent<Props> = ({ items, onMenuClick }) => (
  <header className="ns-navbar">
    <h4 className="ns-portfolio">Portfolio</h4>
    <ul className="ns-nav-items" role="navigation">
      {items.map((item, key) => (
        <NavItem key={key} item={item} />
      ))}
    </ul>
    <button
      className="ns-menu-btn"
      type="button"
      onClick={onMenuClick}
      aria-label="Toggle Menu"
    >
      <span className="ns-menu-line" />
      <span className="ns-menu-line" />
      <span className="ns-menu-line" />
    </button>
  </header>
);

export default Navbar;
export type { Props };
