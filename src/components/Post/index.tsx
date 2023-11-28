import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticeHeader';
import { PostContainer } from 'components/PostContainer';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </PostContainer>
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
