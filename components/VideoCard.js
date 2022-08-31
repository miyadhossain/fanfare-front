import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const VideoCard = ({ item, setEditModal, setEditInfo, removeVideo }) => {
  return (
    <Fragment>
      <div>
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
        <div className="flex justify-between items-center my-1">
          <h4 className=" font-semibold text-base">{item.title}</h4>
          <div title="Edit">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  <BiDotsHorizontalRounded />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          onClick={() => {
                            setEditModal(true);
                            setEditInfo(item);
                          }}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer"
                          )}
                        >
                          edit
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          onClick={() => removeVideo(item.id)}
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm cursor-pointer"
                          )}
                        >
                          Delete
                        </span>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoCard;
