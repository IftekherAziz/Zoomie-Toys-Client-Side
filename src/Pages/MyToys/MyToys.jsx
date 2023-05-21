import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DynamicTitle from "../../Utilities/DynamicTitle";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const { user } = useContext(AuthContext);

  // Dynamic Title:
  DynamicTitle("My Toys");

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-iftekher-aziz.vercel.app/myToys?email=${user.email}&sort=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((error) => console.error(error));
  }, [user?.email, sortOrder]);

  const handleDelete = (id) => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-iftekher-aziz.vercel.app/myToy/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
          const remaining = myToys.filter(
            (remainingToy) => remainingToy._id !== id
          );
          setMyToys(remaining);
        }
      });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="mt-10 mb-20 mx-5">
      <div className="mb-10 text-4xl font-bold text-center text-gray-800 dark:text-white">
        My Toys
        <hr className="mt-5 mb-12 w-1/12 mx-auto bg-slate-500 h-1" />
      </div>
      <div className="mb-5 flex justify-end">
        <select
          className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
          onChange={handleSortChange}
        >
          <option>Filter By Price</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Photo</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.name}</td>
                <td>
                  <img
                    className="object-cover rounded-full h-12 w-12"
                    src={toy.image}
                    alt="Toy Car"
                  />
                </td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <Link to={`/updateToy/${toy._id}`}>
                    <button>
                      <FaRegEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button onClick={() => handleDelete(toy._id)}>
                      <FaTrashAlt />
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/viewDetails/${toy._id}`}>
                    <button className="btn btn-sm">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id="toastContainer"></div>
      </div>
    </div>
  );
};

export default MyToys;
