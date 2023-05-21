import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import DynamicTitle from "../../Utilities/DynamicTitle";

const UpdateToy = () => {
  // Dynamic Title:
  DynamicTitle("Update Toy");
  const {
    name,
    availableQuantity,
    price,
    rating,
    image,
    description,
    subCategory,
  } = useLoaderData();

  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const handleUpdateToy = (event) => {
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

    fetch(
      `https://b7a11-toy-marketplace-server-side-iftekher-aziz.vercel.app/myUpdatedToy/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToyObj),
      }
    )
      .then((res) => res.json())
      .then(() => {
        // Show success SweetAlert notification
        Swal.fire({
          icon: "success",
          title: "Product Updated Successfully!",
          showConfirmButton: true,
          timer: 5000,
        });
      });
  };
  return (
    <div className="mb-20 mt-10  mx-5">
      <div className="mb-5 text-4xl font-bold text-center text-gray-800 dark:text-white">
        Update Toy
        <hr className="mt-5 w-1/6 mx-auto bg-slate-500 h-1" />
      </div>
      <div>
        <form onSubmit={handleUpdateToy} className="flex w-full  space-x-3">
          <div className="w-full max-w-5xl px-5 py-20 m-auto mt-10 bg-white rounded-lg shadow-md border dark:bg-gray-800">
            <div className="grid max-w-3xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Toy Photo"
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Toy Name"
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    name="selsellerName"
                    defaultValue={user?.displayName}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Seller Email"
                    readOnly
                  />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="number"
                    step="any"
                    name="price"
                    defaultValue={price}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                    defaultValue={rating}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Ratings"
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="number"
                    name="availableQuantity"
                    defaultValue={availableQuantity}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-purple-50 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Available Quantity"
                    min={0}
                    required
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <select
                    className="block px-4 py-2 text-gray-700 bg-purple-50 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="subCategory"
                    defaultValue={subCategory}
                    required
                    disabled
                    readOnly
                  >
                    <option disabled>Category</option>
                    <option readOnly value="Sports Car">
                      Sports Car
                    </option>
                    <option readOnly value="Truck">
                      Truck
                    </option>
                    <option readOnly value="Regular Car">
                      Regular Car
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700">
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-purple-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Detail Description"
                    name="description"
                    defaultValue={description}
                    rows="5"
                    cols="40"
                    required
                  ></textarea>
                </label>
              </div>
              <div className="col-span-2 text-right">
                <button type="submit" className="btn btn-block">
                  Update Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="toastContainer"></div>
    </div>
  );
};

export default UpdateToy;
