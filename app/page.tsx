import Image from "next/image";
// import styles from "../styles/homePage.module.css";


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p >This is the home page</p>
      <Image src="/image.jpg" alt="Image" width={500} height={500} priority/>
    </div>
  );
}
