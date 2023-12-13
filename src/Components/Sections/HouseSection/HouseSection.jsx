import React, { useEffect, useState } from "react";

const HouseSection = () => {
  const [house, setHouse] = useState([]);
  const [selectedType, setselectedType] = useState("");
  const [selectedMembers, setselectedMembers] = useState("");
  const [selectedRent, setselectedRent] = useState("");
  const [filteredHouses, setfilteredHouses] = useState([]);

  useEffect(() => {
    fetch("house.json")
      .then((res) => res.json())
      .then((data) => setHouse(data));
  }, []);

  const handleSelectHouse = (e) => {
    e.preventDefault();
    setfilteredHouses([]);
    const type = selectedType;
    const rent = selectedRent;
    const members = selectedMembers;
    console.log("Selected values:", { type, rent, members });

    const filteredHouses = house.filter((home) => {
      const typeCondition = !type || home.type === type;
      const membersCondition = !members || home.members === members;
      const rentCondition = !rent || home.rent === rent;

      console.log("Conditions:", {
        typeCondition,
        membersCondition,
        rentCondition,
      });

      return typeCondition && membersCondition && rentCondition;
    });

    console.log("Filtered Houses:", filteredHouses);
    setfilteredHouses(filteredHouses);
  };

  return (
    <div>
      <h1 className="text-slate-600 font-bold text-2xl">
        Search Your Dream Home
      </h1>
      <div>
        <form onSubmit={handleSelectHouse}>
          <div className="grid grid-cols-3 gap-5 font-bold searchfont text-slate-600 p-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-600">Type</span>
              </label>
              <select
                id="typeSelect"
                name="type"
                className="input input-bordered"
                value={selectedType}
                onChange={(e) => setselectedType(e.target.value)}
              >
                <option value="adult">Adult</option>
                <option value="family">Family</option>
                <option value="couple">Couple</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-600">
                  Members
                </span>
              </label>
              <select
                id="membersSelect"
                name="members"
                className="input input-bordered "
                value={selectedMembers}
                onChange={(e) => setselectedMembers(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2+">2+</option>
                <option value="4+">4+</option>
                <option value="more">More</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-slate-600">Rent</span>
              </label>
              <select
                id="rentSelect"
                name="rent"
                className="input input-bordered"
                value={selectedRent}
                onChange={(e) => setselectedRent(e.target.value)}
              >
                <option value="10k">10k</option>
                <option value="20k">20k</option>
                <option value="30k">30k</option>
                <option value="40k">40k</option>
                <option value="others">others</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="input input-bordered text-slate-600 font-bold searchfont w-full"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
        {filteredHouses.length === 0 ? (
          <div className="flex justify-center items-center text-center ">
            <p className="text-slate-600 text-4xl font-bold m-10">
              No matching houses found.
            </p>
          </div>
        ) : (
          filteredHouses.map((home) => (
            <div className="flex justify-center items-center">
              <div key={home.id}>
                <div className="border text-slate-600 shadow-2xl rounded-md">
                  <div>
                    <img
                      src={home.image}
                      className="h-[200px] rounded-md"
                      alt={`House ${home.id}`}
                    />
                  </div>
                  <div className="font-bold p-2">
                    <h1>Members: {home.members}</h1>
                    <h1>Location: {home.location}</h1>
                    <h1>Type: {home.type}</h1>
                    <h1>Rent: {home.rent}</h1>
                    <div className="border bg-white p-2 rounded-full m-5">
                      <button>Book</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HouseSection;
