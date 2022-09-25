import { request, gql } from 'graphql-request';


const graphqlAPI =  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
   
  query MyQuery {
    posts {
      title
      slug
      tags
      id
      excerpt
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
      content {
        markdown
      }
    }
  }
  
  
  `;

  const result = await request(graphqlAPI, query);

  return result;
};