

const MyToys = () => {
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
                <th>Name</th>
                <th>Email</th>
                <th>Toy Name</th>
                <th>Photo</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Available</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
};

export default MyToys;