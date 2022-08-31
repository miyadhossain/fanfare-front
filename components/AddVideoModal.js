import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import AppInput from "./utilis/AppInput";
import AppInputLabel from "./utilis/AppInputLabel";

const AddVideoModal = ({
  videoAddModal,
  setVideoAddModal,
  setTitle,
  setSrc,
  addVideoHandler,
}) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={videoAddModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setVideoAddModal}
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
                              onChange={(e) => setTitle(e.target.value)}
                              typ="text"
                              className="w-full pl-4 pr-3 h-[50px] rounded-md border border-light outline-none focus:border-orange-300"
                              inputPlaceholder="Enter video title"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <AppInputLabel labelTitle="Embeded Video Src" />
                          <div className="flex">
                            <AppInput
                              onChange={(e) => setSrc(e.target.value)}
                              typ="text"
                              className="w-full pl-4 pr-3 h-[50px] rounded-md border border-light outline-none focus:border-orange-300"
                              inputPlaceholder="YTJgerf8q9"
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
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setVideoAddModal(false)}
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
  );
};

export default AddVideoModal;
