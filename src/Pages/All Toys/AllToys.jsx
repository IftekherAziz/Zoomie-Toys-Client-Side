import { useState, useEffect } from "react";
import axios from "axios";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/toys?search=${searchQuery}`
      );
      setToys(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      <div className="text-center my-10 bg-zinc-100 p-10">
        <input
          className="border rounded py-3 px-20 text-center"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by Toy Name"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full border rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy.id}>
                <td>{toy.sellerName || "N/A"}</td>
                <td>{toy.name}</td>

                <td>
                  {toy.subCategory.charAt(0).toUpperCase() +
                    toy.subCategory.slice(1)}
                </td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  {/* <button onClick={() => viewDetails(toy.id)}>View Details</button> */}
                  <button className="btn btn-md ">View Details</button>
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
