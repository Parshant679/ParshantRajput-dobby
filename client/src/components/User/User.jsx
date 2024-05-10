import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import NavBar from "../Navbar/Navbar";
import Image from "../Image/Image";
import axios from "axios";
function User() {
  const state = useContext(GlobalState);
  const { user } = state.User;
  const [images, setImages] = useState([]);

  async function getImage() {
    const res = await axios.get(
      import.meta.env.VITE_BASE_URL +
        "/image/?userId=" +
        user._id +
        "&&pageNo=1",
      {
        withCredentials: true,
      }
    );

    setImages(res.data.data);
  }
  useEffect(() => {
    getImage();
  }, [user]);
  return (
    <div className="flex flex-col">
      <NavBar data={state} />
      <div className="Container">
        <div className=" justify-between flex flex-wrap">
          <h1 className="text-6xl text-white font-bold">{user.name}</h1>
          <h2 className="text-6xl text-white font-bold">{user.email}</h2>
          <Logout />
        </div>
      </div>
      {images.length !== 0 && (
        <div className="image__grid">
          {images.map((item) => {
            return <Image data={item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default User;
