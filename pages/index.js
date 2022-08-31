import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRef, useState } from "react";
import AddVideoModal from "../components/AddVideoModal";
import EditModal from "../components/EditModal";
import LoadingSpinner from "../components/LoadingSpinner";
import VideoCard from "../components/VideoCard";
import { CREATE_VIDEO, DELETE_VIDEO, EDIT_VIDEO } from "../graphql/mutation";
import { getAllVideos } from "../graphql/query";

export default function Home() {
  const { loading, error, data } = useQuery(getAllVideos);
  const [createVideo, { err }] = useMutation(CREATE_VIDEO, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });
  const [deleteVideo, { errr }] = useMutation(DELETE_VIDEO, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });
  const [updateVideo, { errrr }] = useMutation(EDIT_VIDEO, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });
  const [videoAddModal, setVideoAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editInfo, setEditInfo] = useState({});
  const [title, setTitle] = useState(null);
  const [src, setSrc] = useState(null);
  const [titleEdit, setTitleEdit] = useState(null);
  const [srcEdit, setSrcEdit] = useState(null);
  const cancelButtonRef = useRef(null);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  const addVideoHandler = () => {
    createVideo({
      variables: {
        title: title,
        src: src,
      },
    });
  };

  const removeVideo = (id) => {
    deleteVideo({
      variables: {
        id: id,
      },
    });
  };

  const editVideoHandler = () => {
    updateVideo({
      variables: {
        id: editInfo?.id,
        title: titleEdit,
        src: srcEdit,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Video Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full max-w-[1188px] mx-auto">
        <h1 className="text-2xl font-semibold text-green-600 text-center my-8">
          Video Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 grid-rows-1 mt-10">
          {data?.getAllVideos?.map((item) => (
            <VideoCard
              item={item}
              setEditModal={setEditModal}
              setEditInfo={setEditInfo}
              removeVideo={removeVideo}
              key={item.id}
            />
          ))}
        </div>
        <div className="flex justify-center my-8">
          <button
            onClick={() => setVideoAddModal(true)}
            className="focus:outline-none bg-green-700 px-8 py-2 rounded-md text-white shadow-md"
          >
            Add More Video
          </button>
        </div>

        {/* add video modal */}
        <AddVideoModal
          videoAddModal={videoAddModal}
          setVideoAddModal={setVideoAddModal}
          setTitle={setTitle}
          setSrc={setSrc}
          addVideoHandler={addVideoHandler}
        />

        {/* add video modal end */}

        {/* edit modal */}
        <EditModal
          editModal={editModal}
          setEditModal={setEditModal}
          setTitleEdit={setTitleEdit}
          setSrcEdit={setSrcEdit}
          editVideoHandler={editVideoHandler}
        />
        {/* edit modal end */}
      </div>
    </>
  );
}
