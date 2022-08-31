import { gql } from "@apollo/client";

export const getAllVideos = gql`
  {
    getVideos {
      id
      title
      src
    }
  }
`;
