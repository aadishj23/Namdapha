const AnimalImages = () => {
  return (
    <div className="flex flex-col h-screen">
      <img
        src="path.png"
        alt="Butterfly or Moth"
        className="w-full absolute"
      />
      
      <img
        src="animalsimage.svg"
        alt="Butterfly or Moth"
        className="w-full z-10 absolute"
      />
    </div>
  )
}

export default AnimalImages
