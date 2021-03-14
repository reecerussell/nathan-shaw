import { FunctionComponent } from 'react';
import { NavItem, About as AboutModel } from '../../../models';
import { Navbar, Sidebar, withContent } from '../..';
import { useSidebar } from '../../../hooks';
import Carousel from './Carousel';

interface Props {
  navItems: NavItem[];
  about: AboutModel;
}

const About: FunctionComponent<Props> = ({ navItems, about: { carousel } }) => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <>
      <section
        className="ns-section ns-fullscreen-view ns-about"
        onClick={closeSidebar}
      >
        <Navbar items={navItems} onMenuClick={toggleSidebar} />

        <div className="ns-content">
          <div className="ns-info">
            <h1 className="ns-header">About Me</h1>

            <p className="ns-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              volutpat semper tempor. Sed dapibus dignissim urna sit amet
              tincidunt. Quisque nec lobortis tortor. Aenean dignissim fringilla
              nibh at maximus. Fusce egestas vehicula diam sodales dapibus.
              Donec iaculis faucibus justo id aliquam. Donec dignissim id augue
              quis molestie. Curabitur lorem nunc, rutrum vel sem sit amet,
              ultricies molestie massa. Fusce vitae nibh non velit accumsan
              pulvinar vitae eget magna. Nullam in ligula aliquet, luctus orci
              vel, blandit urna. Vestibulum ultrices tortor eu quam placerat
              volutpat. Proin a lectus ac sem consectetur dapibus. Mauris nec
              suscipit justo. Nunc faucibus mi vel nibh bibendum, ut lobortis
              purus ultricies.
            </p>
          </div>

          <Carousel items={carousel.items} maxItems={carousel.maxItems} />
        </div>
      </section>
      <Sidebar items={navItems} isOpen={isSidebarOpen} />
    </>
  );
};

export default withContent(About);
export type { Props };
