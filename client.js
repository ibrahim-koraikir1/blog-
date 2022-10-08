import { request, gql } from 'graphql-request';


const graphqlAPI =  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
export const slugs = async () => {
 const query = gql ` 
 query MyQuery {
    posts {
      slug
    }
  }
  `
  const result = await request(graphqlAPI, query);

  return result;
}
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

export const getRecentPosts = async () => {
  const query = gql`
  query MyQuery {
    posts(orderBy: publishedAt_ASC, last: 10) {
      coverImage {
        url
      }
      date
      slug
      tags
      title
      excerpt
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
    excerpt
    createdAt
    slug
    date
    author {
      name
      picture {
        url
      }
    }
    content {
      markdown
    }
    coverImage {
      url
    }
       
       
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};