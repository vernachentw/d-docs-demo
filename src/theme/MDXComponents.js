// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { CardSection, Card } from '../components/CardComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  CardSection,
  Card,
};
