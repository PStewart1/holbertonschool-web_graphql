import { gql } from "apollo-boost";

const getTasksQuery = gql`
  {
    tasks {
      id
      title
      description
      project {
        id
        name
      }
    }
  }
`;


const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

export { getTasksQuery, getProjectsQuery };
