import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
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

  return (
    <div className="mb-20">
      <div className="my-10  text-4xl font-bold text-center text-gray-800 dark:text-white">
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
      <div className="overflow-x-auto">
        <table className="table w-full border rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Photo</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
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
                  <Link to={`/viewDetails/${toy._id}`}>
                    <button className="btn btn-sm ">View Details</button>
                  </Link>
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
