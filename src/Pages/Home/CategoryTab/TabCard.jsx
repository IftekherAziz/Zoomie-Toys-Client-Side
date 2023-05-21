import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import { useNavigate } from "react-router-dom";

const TabCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, name, price, rating } = toy;

    const navigate = useNavigate();

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
    <div className="card w-full bg-base-100 shadow-md border relative group overflow-hidden">
      <figure>
        <img
          className=" h-[320px] sm:h-[250px] w-full transition-transform duration-300 transform-gpu group-hover:scale-105"
          src={image}
          alt="Toys Car"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Price:</b>{" "}
          <span className="text-red-600 font-medium"> ${price}</span>
        </p>
        <div>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
        </div>
        <div className="mt-3">
          <button className="btn btn-sm" onClick={() => handleDetails(_id)}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
