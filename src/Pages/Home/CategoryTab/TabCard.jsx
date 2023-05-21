import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { Rating } from "@smastrom/react-rating";

const TabCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, name, price, rating } = toy;

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
        <p>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
        </p>
        <div className="mt-3">
          <Link to={`/viewDetails/${_id}`}>
            <button
              className="btn btn-block"
              onClick={() => {
                if (!user) {
                  // Show success SweetAlert notification
                  Swal.fire({
                    title: "Access Denied",
                    text: "Please login to view this page.",
                    icon: "error",
                    confirmButtonText: "OK",
                    timer: 10000,
                  });
                }
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
