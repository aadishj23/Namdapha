const AnimalImages = () => {
  return (
    <div 
      className="min-h-[700px] relative flex items-center justify-center -mt-4"
      style={{
        backgroundImage: 'url("./shadedown.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
        <img src="animal1.png" alt="animal1" className="block w-full" />
        <img src="animal2.png" alt="animal2" className="block w-full" />
        <img src="animal3.png" alt="animal3" className="block w-full" />
        <img src="animal4.png" alt="animal4" className="block w-full" />
      </div>
    </div>
  );
};

export default AnimalImages;
