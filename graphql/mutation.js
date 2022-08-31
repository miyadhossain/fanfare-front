import { gql } from "@apollo/client";
export const CREATE_VIDEO = gql`
  mutation createVideo($title: String, $src: String) {
    createVideo(video: { title: $title, src: $src }) {
      id
      title
      src
    }
  }
`;

export const EDIT_VIDEO = gql`
  mutation updateVideo($id: String, $title: String, $src: String) {
    updateVideo(id: $id, video: { title: $title, src: $src }) {
      id
      title
      src
    }
  }
`;

export const DELETE_VIDEO = gql`
  mutation deleteVideo($id: String) {
    deleteVideo(id: $id)
  }
`;
