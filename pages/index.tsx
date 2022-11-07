import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { toast } from "react-toastify";

export default function Home() {
  const onClick = () => {
    toast("Toast is good", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  };
  return (
    <div>
      <h1 className="text-center">This is home page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        Check toastify.
      </button>
    </div>
  );
}
