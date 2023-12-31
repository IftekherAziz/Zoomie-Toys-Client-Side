import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DynamicTitle from "../../Utilities/DynamicTitle";
import { Rating } from "@smastrom/react-rating";
import AOS from "aos";
import "aos/dist/aos.css";

const ViewDeatils = () => {

  DynamicTitle("Toy Details");

  const { id } = useParams();
  const [detailsData, setDetailsData] = useState({});
  const {
    image,
    name,
    description,
    price,
    rating,
    subCategory,
    availableQuantity,
    sellerEmail,
    sellerName,
  } = detailsData;


  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-iftekher-aziz.vercel.app/toy/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetailsData(data);
      });
  }, [id]);

   useEffect(() => {
     AOS.init();
   }, []);

  return (
    <div className="bg-white py-10 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl sm:text-center">
          <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
            {name}
          </h2>
          <hr className="mt-5 mb-12 w-1/3 mx-auto bg-slate-500 h-1" />
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-xl  bg-zinc-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-lg font-semibold leading-6 text-indigo-600">
                Toy Features:
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-md leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <b>Price:</b>
                {price}
              </li>
              <li className="flex gap-x-3">
                <b>Rating:</b>
                <div>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                  ></Rating>
                </div>
              </li>
              <li className="flex gap-x-3">
                <b>Category:</b>
                {subCategory}
              </li>
              <li className="flex gap-x-3">
                <b>Available Quantity:</b>
                {availableQuantity}
              </li>
              <li className="flex gap-x-3">
                <b>Seller Name: </b>
                {sellerName}
              </li>
              <li className="flex gap-x-3">
                <b>Seller Email: </b>
                {sellerEmail}
              </li>
            </ul>
            <div className="mt-12 text-center">
              <Link to="/alltoys">
                <button className="btn btn-block">Browse More Toys</button>
              </Link>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-white border m-4 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className=" px-8">
                <img data-aos="fade-up"  src={image} alt="Toy Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDeatils;
