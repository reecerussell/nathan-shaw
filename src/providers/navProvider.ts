import { NavItem } from '../models';

interface NavProvider {
  get(): Promise<NavItem[]>;
}

export default NavProvider;
