import { Wrapper } from './styles';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { formatDate } from '../../utils/format-date';
import Link from 'next/link';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Wrapper>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por</span>
            <Link href={`/author/${author.slug}`}>
              <a>{author.displayName}</a>
            </Link>

            <span className="separator">|</span>
          </>
        )}
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {categories.length > 0 && (
          <>
            <span className="separator">|</span>
            <span className="categories">
              {categories.map((category) => {
                return (
                  <span key={`article-mata-cat-${category.id}`}>
                    <Link href={`/category/${category.slug}`}>
                      <a href={`/category/${category.slug}`}>
                        {category.displayName}
                      </a>
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Wrapper>
  );
};
