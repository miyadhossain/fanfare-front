import { useMutation, useQuery } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import LoadingSpinner from "../components/LoadingSpinner";
import AppInput from "../components/utilis/AppInput";
import AppInputLabel from "../components/utilis/AppInputLabel";
import { CREATE_VIDEO } from "../graphql/mutation";
import { getAllVideos } from "../graphql/query";

export default function Home() {
  const { loading, error, data } = useQuery(getAllVideos);
  const [createVideo, { err }] = useMutation(CREATE_VIDEO);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [src, setSrc] = useState(null);
  const cancelButtonRef = useRef(null);

  const addVideoHandler = () => {
    createVideo({
      variables: {
        title: title,
        src: src,
      },
    });
  };

  console.log(data);

  return (
    <div className="w-full max-w-[1188px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 grid-rows-1 mt-10">
        {loading ? (
          <LoadingSpinner />
        ) : (
          data?.getVideos?.map((item) => (
            <Fragment key={item.id}>
              <LiteYouTubeEmbed
                wrapperClass="yt-lite"
                id={item?.src}
                title="product video"
                adNetwork
                playlist={false}
                playlistCoverId={item?.src}
                poster="hqdefault"
                noCookie
              />
            </Fragment>
          ))
        )}
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 px-8 py-2 rounded-md text-white shadow-md"
        >
          Add More Video
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Add Video
                        </Dialog.Title>
                        <div className="mt-2 flex space-x-2">
                          <div className="w-full">
                            <AppInputLabel labelTitle="Video Title" />
                            <div className="flex">
                              <AppInput
                                onInput={(e) => setTitle(e.target.value)}
                                typ="text"
                                className="w-full pl-4 pr-3 h-[50px] rounded-md border border-light outline-none focus:border-orange-300"
                                inputPlaceholder="Enter video title"
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <AppInputLabel labelTitle="Video Src" />
                            <div className="flex">
                              <AppInput
                                onInput={(e) => setSrc(e.target.value)}
                                typ="text"
                                className="w-full pl-4 pr-3 h-[50px] rounded-md border border-light outline-none focus:border-orange-300"
                                inputPlaceholder="Enter embed src"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => addVideoHandler()}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
