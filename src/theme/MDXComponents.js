// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { CardSection, Card } from '../components/CardComponents';
import { CustomizingAdmonition } from '../components/CustomizingAdmonition';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  CustomizingAdmonition,
  CardSection,
  Card,
};
