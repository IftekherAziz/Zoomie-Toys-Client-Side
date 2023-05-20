import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center my-10 bg-zinc-100 p-10">
        <input
          className="border rounded py-3 px-20 text-center"
          type="text"        
          placeholder="Search by Toy Name"
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
            {toys.map((toy) => (
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
