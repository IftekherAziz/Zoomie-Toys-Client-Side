import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DynamicTitle from "../../Utilities/DynamicTitle";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  // Dynamic Title:
  DynamicTitle("All Toys");

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-iftekher-aziz.vercel.app/toys"
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
      });
  }, []);

  const handleSearchQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  const handleDetails = (id) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Please Login to View Details!",
      }).then((result) => {        
        if (result.isConfirmed) {
          navigate(`/viewDetails/${id}`);
        }
      });
    } else {
      navigate(`/viewDetails/${id}`);
    }
  };

  return (
    <div className="mb-20  mx-5">
      <div className="my-10  text-4xl font-bold text-center text-gray-800 ">
        All Toys
        <hr className="mt-5 mb-12 w-1/12 mx-auto bg-slate-500 h-1" />
      </div>

      <div className="mb-5 flex justify-end">
        <input
          className="border rounded py-3 px-10 text-center"
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Photo</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr key={toy._id}>
                <td className="font-medium">
                  {(toy.sellerName || "N/A").charAt(0).toUpperCase() +
                    (toy.sellerName || "N/A").slice(1)}
                </td>
                <td>
                  <img
                    className="object-cover rounded-full h-12 w-12 "
                    src={toy.image}
                    alt=""
                  />
                </td>
                <td>{toy.name}</td>
                <td>
                  {toy.subCategory.charAt(0).toUpperCase() +
                    toy.subCategory.slice(1)}
                </td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>              
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDetails(toy._id)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
