import { FunctionComponentElement } from 'react';
import { NavItem } from '../../../models';
import { Navbar, Sidebar, withContent } from '../..';
import { useSidebar } from '../../../hooks';

interface Props {
  navItems: NavItem[];
}

const Home = ({ navItems }): FunctionComponentElement<Props> => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <>
      <section className="ns-section ns-home" onClick={closeSidebar}>
        <Navbar items={navItems} onMenuClick={toggleSidebar} />

        <div className="ns-info">
          <h1 className="ns-header">Nathan Shaw</h1>
          <h2 className="ns-subheader">Graphic Designer</h2>
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
        </div>
      </section>
      <Sidebar items={navItems} isOpen={isSidebarOpen} />
    </>
  );
};

export default withContent(Home);
export type { Props };
