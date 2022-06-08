
import React from "react";

export interface ModalProps {
	show: boolean,
	imageUrl: string,
	onClose: () => void
}

const Modal:React.FC<ModalProps> = ({ show, imageUrl, onClose }) => {
  const handleCloseClick:React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
		onClose();
  };

  return (
		show ?
		<div className="fixed flex bg-overlay justify-center items-center top-0 left-0 w-full h-full py-10">
			<a className="absolute hover:text-gray-300 text-white top-5 right-10 font-mono font-extrabold text-4xl" href="" onClick={handleCloseClick}>&times;</a>
			<img src={imageUrl} alt="" className="sm:w-1/2 sm:max-w-lg max-w-[calc(100vw-80px)] h-[calc(90vh-80px)]" />
		</div> : null
  );
};

export default Modal;