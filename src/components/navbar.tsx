import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { NavItem } from '../models';

interface Props {
  items: NavItem[];
  onMenuClick: any;
}

const Navbar: FunctionComponent<Props> = ({ items, onMenuClick }) => (
  <header className="ns-navbar">
    <h4 className="ns-portfolio">Portfolio</h4>
    <ul className="ns-nav-items" role="nav">
      {items.map((item, key) => (
        <li className="ns-nav-item" key={key}>
          <Link href={item.url}>
            <a className="ns-nav-link" target={item.target}>
              {item.text}
              <span className="ns-underline" />
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <button className="ns-menu-btn" type="button" onClick={onMenuClick}>
      <span className="ns-menu-line" />
      <span className="ns-menu-line" />
      <span className="ns-menu-line" />
    </button>
  </header>
);

export default Navbar;
export type { Props };
