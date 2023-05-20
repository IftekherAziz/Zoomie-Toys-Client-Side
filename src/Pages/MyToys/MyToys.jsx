import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(
    () => {
      // Fetch data from API
      fetch(`http://localhost:5000/myToys?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => console.error(error));
    },
    [user?.email],
    myToys
  );

  const handleDelete = (id) => {
    const procced = confirm("are you sure to delete?");
    if (procced) {
      fetch(`http://localhost:5000/myToy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myToys.filter(
              (remainingToy) => remainingToy._id !== id
            );
            setMyToys(remaining);
          }
        });
    }
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
                  <Link>
                    <button className="btn btn-sm">Update</button>
                  </Link>
                </td>
                <td>
                  <Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
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

export default MyToys;
