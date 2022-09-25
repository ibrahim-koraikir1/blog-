import { request, gql } from 'graphql-request';

const graphqlAPI = "https://api-eu-central-1.hygraph.com/v2/cl81l7gau1jev01up0gba68ur/master"

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