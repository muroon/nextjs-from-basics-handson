import Link from 'next/link';
import React from 'react';
import { Content, Post, formatDate } from '../../pages/index';

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="post-container">
      <h2>{post.title || 'No Title'}</h2>
      {post.createdTs && (
        <div className="post-date">
          Posted: {formatDate(post.createdTs)}
        </div>
      )}
      <div className="post-content">
        {post.contents.map((content, index) => {
          switch (content.type) {
            case 'paragraph':
              return <p key={index}>{content.text}</p>;
            case 'heading_2':
              return <h2 key={index}>{content.text}</h2>;
            case 'heading_3':
              return <h3 key={index}>{content.text}</h3>;
            case 'quote':
              return <blockquote key={index}>{content.text}</blockquote>;
            case 'code':
              return (
                <pre key={index} className={`language-${content.language || ''}`}>
                  <code>{content.text}</code>
                </pre>
              );
            default:
              return null;
          }
        })}
      </div>
      {post.slug && (
        <div className="post-link">
          <Link href={`/posts/${post.slug}`}>
            Read more
          </Link>
        </div>
      )}
    </article>
  );
};

export { PostComponent };