import * as Styled from './styled';
import { PostProps } from '../Post';
import { Cover, Excerpt } from './styled';
import Link from 'next/link';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-typed/strapi-image';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <>
      <Styled.Wrapper>
        <p>{title}</p>
        <Link href={`/posts/${slug}`}>
          <a>
            <Cover src={cover.url} />
          </a>
        </Link>
        <Heading as="h2" size="small">
          <Link href={`/posts/${slug}`}>
            <a>{title}</a>
          </Link>
        </Heading>
        <Excerpt>{excerpt}</Excerpt>
      </Styled.Wrapper>
    </>
  );
};
