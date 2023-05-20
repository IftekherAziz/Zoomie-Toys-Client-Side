import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const name = form.name.value;
    const availableQuantity = form.availableQuantity.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const description = form.description.value;
    const subCategory = form.subCategory.value;

    const addToyObj = {
      name,
      availableQuantity,
      sellerName,
      sellerEmail,
      price,
      rating,
      image,
      description,
      subCategory,
    };
    // console.log(addToyObj);

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Show success SweetAlert notification
        Swal.fire({
          icon: "success",
          title: "Product submitted successfully!",
          showConfirmButton: true,
          timer: 5000,
        }); 
        form.reset();       
      });
  };

  return (
    <div className="mb-20 mx-5">
      <form onSubmit={handleAddToy} className="flex w-full  space-x-3">
        <div className="w-full max-w-5xl px-5 py-20 m-auto mt-10 bg-stone-100 rounded-lg shadow dark:bg-gray-800">
          <div className="mb-10 text-4xl font-bold text-center text-gray-800 dark:text-white">
            Add New Toy
            <hr className="mt-5 mb-12 w-1/6 mx-auto bg-slate-500 h-1" />
          </div>
          <div className="grid max-w-3xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="image"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Toy Photo"
                  required
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Toy Name"
                  required
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="selsellerName"
                  defaultValue={user?.displayName}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Seller Name"
                  readOnly
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Seller Email"
                  readOnly
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <select
                  className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  name="subCategory"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="sports_car">Sports Car</option>
                  <option value="truck">Truck</option>
                  <option value="regular_car">Regular Car</option>
                </select>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="number"
                  step="any"
                  name="price"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Price"
                  min={0}
                  required
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="number"
                  min={0}
                  max={5}
                  step="any"
                  name="rating"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Ratings"
                  required
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="number"
                  name="availableQuantity"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Available Quantity"
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Detail Description"
                  name="description"
                  rows="5"
                  cols="40"
                  required
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button type="submit" className="btn btn-block">
                Add Now
              </button>
            </div>
          </div>
        </div>
      </form>
      <div id="toastContainer"></div>
    </div>
  );
};

export default AddAToy;
