import { NavItem } from '../../models';
import * as Providers from '../index';
import BaseProvider from './baseProvider';

class NavProvider extends BaseProvider implements Providers.NavProvider {
  constructor() {
    super();
  }

  get(): Promise<NavItem[]> {
    return new Promise((resolve, reject) => resolve(this.content.navItems));
  }
}

export default NavProvider;
