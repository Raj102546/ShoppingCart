import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Shop() {
    const [url, setUrl] = useState();

  const id = Math.floor(Math.random() * 10) + 1;
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await data.json();
        setUrl(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllData();
  }, []);
  return (
    <>
      <div className="w-60% h-[300px] text-primary m-3 bg-surface border-border border-2 rounded-3xl">
        <h1 className="text-4xl font-semibold m-5">All Products</h1>
        {url ? <p>{url?.title}</p> : <p>Loading...</p>}
      </div>
      <Link to="/">goback to home</Link>
    </>
  );
}
