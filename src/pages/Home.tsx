import React, { useState, useEffect } from 'react';
import { Navbar, Sidebar } from '../components';
import { NavProvider } from '../providers/content';

const Home = ({ navItems, url }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [url]);

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

Home.getInitialProps = async function () {
  const provider = new NavProvider();
  const items = await provider.get();

  return { navItems: items };
};

export default Home;
