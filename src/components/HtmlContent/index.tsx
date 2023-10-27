import { Container } from './styles';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: html }} />;
};
