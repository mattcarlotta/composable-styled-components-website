import { CSSProperties, ReactElement } from "~types";

export interface AnchorTitleProps {
  ariaLabel: string;
  children: string | ReactElement;
  color?: string;
  id: string;
}

export interface LinkComponentProps {
  ariaLabel: string;
  asHref?: string;
  className: string;
  children: string | ReactElement;
  dataTestId?: string;
  href: string;
  id?: string;
  style: CSSProperties;
  target?: string;
}

export interface HeaderProps {
  children?: ReactElement;
  description?: string;
  name?: string;
  title: string;
  url?: string;
  type?: string;
}

export interface NoteProps {
  children: any;
}

export interface PreviewProps {
  children: any;
  code: string;
}

export interface SyntaxHighlighterProps {
  children: ReactElement | string;
  preStyles?: CSSProperties;
}
