import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(
    () => {
      // Fetch data from API
      fetch(`http://localhost:5000/myToys?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyToys(data);
        })
        .catch((error) => console.error(error));
    },
    [user?.email],
    myToys
  );

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myToy/${id}`, {
      method: "DELETE",
    })
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

  return (
    <div className="mt-10">
      <div className="mb-10 text-4xl font-bold text-center text-gray-800 dark:text-white">
        My Toys
        <hr className="mt-5 mb-12 w-1/12 mx-auto bg-slate-500 h-1" />
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full border rounded-xl">
          {/* head */}
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
              <th>Deatils</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.name}</td>
                <td>
                  <img
                    className="object-cover rounded-full h-12 w-12 "
                    src={toy.image}
                    alt=""
                  />
                </td>

                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>

                <td>{toy.availableQuantity}</td>
                <td>
                  <Link to={`/updateToy/${toy._id}`}>
                    <button>
                      {" "}
                      <FaRegEdit></FaRegEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button onClick={() => handleDelete(toy._id)}>
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/viewDetails/${toy._id}`}>
                    <button className="btn btn-sm ">Details</button>
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
