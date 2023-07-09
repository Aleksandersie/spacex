//import styles from './page.module.scss'

import Link from "next/link";
import Nav from "./components/nav/Nav";
import MainBlock from "./components/mainBlock/MainBlock";
import { MAIN_HOST } from "./host";

export default async function Home() {

//   const response = await fetch(`${MAIN_HOST}/api/pageText`, {
//     cache: "no-cache",
//   }); 
// const data = await response.json();
// console.log(data)

  return (
    <main className='backImg'  >
      <div className='header'>
        <div className="container">
          <header className="headerWrapper">
          <div className="logo">
            <Link href={"/"}>
                <div className="logoImg"></div>
            </Link></div>
            <Nav/>
          </header>
          <main>
            <MainBlock/>
          </main>
        </div> 
          
      </div>
      
    </main>
  )
}
