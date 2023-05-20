const MyGalllery = () => {
  return (
    <div className="p-10">
      <div>
        <h2 className="text-5xl font-bold text-center my-10">Photo Gallery</h2>
        <hr className="w-1/4 mx-auto bg-blue-700 h-1" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/B2M3pqp/Tonka-Steel-Classic-Mighty-Dump-Truck-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/3km1FMs/Tonka-Ford-F-150-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/VgzQqPF/Fisher-Price-Little-People-SUV-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/1GgP0FX/Hot-Wheels-Monster-Jam-Grave-Digger-Truck-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/MBLfhTH/LEGO-Technic-6x6-Volvo-Articulated-Hauler-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/M14MGxw/Matchbox-Toyota-Camry-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/Tc8SqRH/Hot-Wheels-Lamborghini-Aventador-removebg-preview-1.png"
            alt=""
          />
        </div>
        <div className="border rounded-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.ibb.co/bdXdFBJ/Maisto-Scale-Chevrolet-Corvette-Stingray-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MyGalllery;
