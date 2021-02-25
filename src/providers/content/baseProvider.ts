import { Content } from '../../models';
import content from '../../_content';

class BaseProvider {
  content: Content;

  constructor() {
    this.content = content;
  }
}

export default BaseProvider;
