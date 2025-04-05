import { formatDate, Post } from '../../pages/index';

export const PostComponent = ({ post }: { post: Post }) => {
    return (
        <div className="post">
            {post.createdTs && (
                <div className="post-date">
                    {formatDate(post.createdTs)}
                </div>
            )}
        </div>
    );
};