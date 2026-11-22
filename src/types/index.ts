/** A navbar link to a section of the one-page site, by its id */
export interface NavItem {
  label: string;
  section: string;
  /** tiny tag shown beside the label, e.g. "Coming soon" */
  tag?: string;
}
