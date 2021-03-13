import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { NavItem } from '../../models';

interface Props {
  items: NavItem[];
  isOpen: boolean;
}

const Sidebar: FunctionComponent<Props> = ({ items, isOpen }) => (
  <aside className={classNames('ns-sidebar', { open: isOpen })}>
    <ul className="ns-nav-items" role="navigation">
      {items.map((item, key) => (
        <li key={key} className="ns-nav-item">
          <Link to={item.url} target={item.target} className="ns-nav-link">
            {item.text}
            <span className="ns-underline" />
          </Link>
        </li>
      ))}
    </ul>

    <div className="ns-socials">
      <a href="#" className="ns-social-link">
        Facebook
        <span className="ns-underline" />
      </a>
      <a href="#" className="ns-social-link">
        Twitter
        <span className="ns-underline" />
      </a>
      <a href="#" className="ns-social-link">
        Instagram
        <span className="ns-underline" />
      </a>
    </div>

    <footer className="ns-sidebar-footer">
      <p>&copy; Nathan Shaw {new Date().getFullYear()}</p>
    </footer>
  </aside>
);

export default Sidebar;
export type { Props };
