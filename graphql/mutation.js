import { gql } from "@apollo/client";
export const CREATE_VIDEO = gql`
  mutation Mutation($videoInput: VideoInput) {
    createVideo(videoInput: $videoInput) {
      title
      src
      createdAt
    }
  }
`;

export const EDIT_VIDEO = gql`
  mutation EditVideo($id: ID!, $videoInput: VideoInput) {
    editVideo(ID: $id, videoInput: $videoInput)
  }
`;

export const DELETE_VIDEO = gql`
  mutation Mutation($id: ID!) {
    deleteVideo(ID: $id)
  }
`;
