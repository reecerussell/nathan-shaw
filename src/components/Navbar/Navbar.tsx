import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../models';

interface Props {
  items: NavItem[];
  onMenuClick: any;
}

const Navbar: FunctionComponent<Props> = ({ items, onMenuClick }) => (
  <header className="ns-navbar">
    <h4 className="ns-portfolio">Portfolio</h4>
    <ul className="ns-nav-items" role="navigation">
      {items.map((item, key) => (
        <li className="ns-nav-item" key={key}>
          <Link to={item.url} target={item.target} className="ns-nav-link">
            {item.text}
            <span className="ns-underline" />
          </Link>
        </li>
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
