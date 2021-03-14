import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSidebar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggle = (e): void => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  const close = (): void => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return {
    isSidebarOpen: isOpen,
    toggleSidebar: toggle,
    closeSidebar: close,
  };
};

export default useSidebar;
