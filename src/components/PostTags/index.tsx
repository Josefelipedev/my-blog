import * as Styled from './styled';
import { PostTag } from '../../shared-typed/tag';
import Link from 'next/link';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      tags:
      {tags?.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.slug}`}>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
