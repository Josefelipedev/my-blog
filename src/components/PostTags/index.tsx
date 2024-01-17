import * as Styled from './styled';

export type PostTagsProps = {
  title: string;
};

export const PostTags = ({ title }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      <h1>Tags</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
