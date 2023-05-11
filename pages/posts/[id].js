import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }

export async function getStaticPaths() {
    const data = getSortedPostsData()
  // Return a list of possible value for id

  return {
    paths: data,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = getSortedPostsData()
    console.log({postData})
    return {
        props: {
            postData: postData.map(p => ({title: p.params.title, date: p.params.date, id: p.params.id})),
        },
      };
  }