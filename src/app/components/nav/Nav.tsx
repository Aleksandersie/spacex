"use client"

import Link from "next/link"
import styles from "./styles.module.scss"
import { MAIN_HOST } from "@/app/host";
import { useGetPageTextQuery } from "@/app/store/pageTextApi";

export default function Nav(){
    //   const response = await fetch(`${MAIN_HOST}/api/pageText`, {
    //   cache: "no-cache",
    //   }); 
    //   const data = await response.json();
      const getPageText = useGetPageTextQuery('')  

    const mock = [
        'Главная',
        'Технология',
        'График полётов',
        'Гарантии',
        'О компании',
        'Контакты',
    ]

    return (
        <nav>
           <ul className={styles.itemsBlock}>
            {/* {mock.map(el=>(
                <li className={styles.items}>{el}</li>
            ))} */}
            <li className={styles.items}>{getPageText.data?.menu1}</li>
            <li className={styles.items}>{getPageText.data?.menu2}</li>
            <li className={styles.items}>{getPageText.data?.menu3}</li>
            <li className={styles.items}>{getPageText.data?.menu4}</li>
            <li className={styles.items}>{getPageText.data?.menu5}</li>
            <li className={styles.items}>{getPageText.data?.menu6}</li>
            <li className={styles.items}><Link href={'/admin'}>Админка</Link></li>
            
           </ul>
           <div className={styles.burger}>
            <p className={styles.line}></p>
            <p className={styles.line}></p>
            <p className={styles.line}></p>
           </div>
        </nav>
    )
}