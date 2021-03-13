import { useState, useEffect, FunctionComponentElement } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from '../../../models';
import { Navbar, Sidebar, withContent } from '../..';

interface Props {
  navItems: NavItem[];
}

const Home = ({ navItems }): FunctionComponentElement<Props> => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = e => {
    e.preventDefault();

    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (!isSidebarOpen) {
      return;
    }

    setSidebarOpen(false);
  };

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
