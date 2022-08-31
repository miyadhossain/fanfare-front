import { gql } from "@apollo/client";

export const getAllVideos = gql`
  {
    getAllVideos {
      id
      title
      src
    }
  }
`;
