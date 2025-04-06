import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Post, getPosts, getPostContents } from '../index';
import { Layout } from '../../lib/component/Layout';
import { PostComponent } from '../../lib/component/Post';

type StaticProps = {
    post: Post;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts();
    const paths = posts.map((post) => ({
        params: { slug: post.slug || '' }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const posts = await getPosts(slug);
    const post = posts[0];
    const contents = await getPostContents(post);
    post.contents = contents;

    return {
        props: { post }
    };
};

const PostPage: NextPage<StaticProps> = ({ post }) => {
    return (
        <Layout>
            <PostComponent post={post} />
        </Layout>
    );
};

export default PostPage;
