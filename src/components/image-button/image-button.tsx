import React from 'react'

const ImageButton: React.FC<ImageButtonProps> = ({ imageUrl, onClick }) => (
  <img
    src={imageUrl}
    className="cursor-pointer transition duration-300 hover:scale-95 hover:blur-sm w-full"
    alt=""
    onClick={() => onClick(imageUrl)}
  />
)

export interface ImageButtonProps {
  imageUrl: string
  onClick: (url: string) => void
}

export default ImageButton
