import { Wrapper } from './styles';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { formatDate } from '../../utils/format-date';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author,
  categories,
}: ArticleMetaProps) => {
  return (
    <Wrapper>
      <p>
        <span>Por</span>
        <a href={`/author/${author.slug}`}>{author.displayName}</a>
        <span className="separator">|</span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator">|</span>
        <span className="categories">
          {categories.map((category) => {
            return (
              <span key={`article-mata-cat-${category.id}`}>
                <a href={`/category/${category.slug}`}>
                  {category.displayName}
                </a>
              </span>
            );
          })}
        </span>
      </p>
    </Wrapper>
  );
};
