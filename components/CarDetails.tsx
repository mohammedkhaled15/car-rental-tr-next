"use client";

import { CarDetailsProps } from "@/types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition as={Fragment} appear show={isOpen}>
        <Dialog as={"div"} className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={"fixed inset-0 bg-black bg-opacity-25"} />
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
