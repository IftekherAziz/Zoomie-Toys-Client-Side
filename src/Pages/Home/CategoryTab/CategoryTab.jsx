import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const CategoryTab = () => {
     const [toys, setToys] = useState([]);
     const [categories, setCategories] = useState("Sports Car");
     useEffect(() => {
       // Fetch data from API
       fetch(`http://localhost:5000/toys/${categories}`)
         .then((res) => res.json())
         .then((data) => setToys(data))
         .catch((error) => console.error(error));
     }, [categories]);

     const handleTabClick = (categoryName) => {
       setCategories(categoryName);
     };
  return (
    <div className="p-10">
      <div>
        <h2 className="text-5xl font-bold text-center my-10">
          Browse Toys By Category
        </h2>
        <hr className="w-1/3 mx-auto bg-blue-700 h-1" />
      </div>
      <div className="mt-5">
        <Tabs>
          <div className="text-center">
            <TabList className="md:w-1/3 mx-auto md:flex mb-12">
              <Tab
                className="font-semibold mr-2 px-4 py-2 bg-slate-800 mb-3 border text-white rounded-md cursor-pointer"
                onClick={() => handleTabClick("Sports Car")}
              >
                Sports Car
              </Tab>
              <Tab
                className="font-semibold mr-2 px-4 py-2 bg-slate-800 mb-3 border text-white rounded-md cursor-pointer"
                onClick={() => handleTabClick("Truck")}
              >
                Truck
              </Tab>
              <Tab
                className="font-semibold mr-2 px-4 py-2 bg-slate-800 mb-3 border text-white rounded-md cursor-pointer"
                onClick={() => handleTabClick("Regular Car")}
              >
                Regular Car
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {toys.map((toy) => (
                <TabCard key={toy._id} toy={toy}></TabCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {toys.map((toy) => (
                <TabCard key={toy._id} toy={toy}></TabCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {toys.map((toy) => (
                <TabCard key={toy._id} toy={toy}></TabCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryTab;
