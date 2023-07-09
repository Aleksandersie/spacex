'use client'
import Link from "next/link"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import { getText } from "../axios";
import { MAIN_HOST } from "../host";
import { useGetPageTextQuery, useUpdatePageTextMutation } from "../store/pageTextApi";





export default function AdminPage(){


    const getPageText = useGetPageTextQuery('')
    const [updatePageText] = useUpdatePageTextMutation()


    const [menu1,setMenu1] = useState<string>('')
    const [menu2,setMenu2] = useState<string>('')
    const [menu3,setMenu3] = useState<string>('')
    const [menu4,setMenu4] = useState<string>('')
    const [menu5,setMenu5] = useState<string>('')
    const [menu6,setMenu6] = useState<string>('')

    const [fact1TopText,setFact1TopText] = useState<string>('')
    const [fact1BigText,setFact1BigText] = useState<string>('')
    const [fact1SmallText,setFact1SmallText] = useState<string>('')

    const [fact2TopText,setFact2TopText] = useState<string>('')
    const [fact2BigText,setFact2BigText] = useState<string>('')
    const [fact2SmallText,setFact2SmallText] = useState<string>('')

    const [fact3TopText,setFact3TopText] = useState<string>('')
    const [fact3BigText,setFact3BigText] = useState<string>('')
    const [fact3SmallText,setFact3SmallText] = useState<string>('')

    const [fact4TopText,setFact4TopText] = useState<string>('')
    const [fact4BigText,setFact4BigText] = useState<string>('')
    const [fact4SmallText,setFact4SmallText] = useState<string>('')

    function newText(){
        updatePageText({
            menu1:menu1||getPageText.data?.menu1,
            menu2:menu2||getPageText.data?.menu2,
            menu3:menu3||getPageText.data?.menu3,
            menu4:menu4||getPageText.data?.menu4,
            menu5:menu5||getPageText.data?.menu5,
            menu6:menu6||getPageText.data?.menu6,
            fact1TopText:fact1TopText||getPageText.data?.fact1TopText,
            fact1BigText:fact1BigText||getPageText.data?.fact1BigText,
            fact1SmallText:fact1SmallText||getPageText.data?.fact1SmallText,
            fact2TopText:fact2TopText||getPageText.data?.fact2TopText,
            fact2BigText:fact2BigText||getPageText.data?.fact2BigText,
            fact2SmallText:fact2SmallText||getPageText.data?.fact2SmallText,

            fact3TopText:fact3TopText||getPageText.data?.fact3TopText,
            fact3BigText:fact3BigText||getPageText.data?.fact3BigText,
            fact3SmallText:fact3SmallText||getPageText.data?.fact3SmallText,

            fact4TopText:fact4TopText||getPageText.data?.fact4TopText,
            fact4BigText:fact4BigText||getPageText.data?.fact4BigText,
            fact4SmallText:fact4SmallText||getPageText.data?.fact4SmallText,
        })
        setMenu1('')
        setMenu2('')
        setMenu3('')
        setMenu4('')
        setMenu5('')
        setMenu6('')

        setFact1TopText('')
        setFact1BigText('')
        setFact1SmallText('')

        setFact2TopText('')
        setFact2BigText('')
        setFact2SmallText('')

        setFact3TopText('')
        setFact3BigText('')
        setFact3SmallText('')

        setFact4TopText('')
        setFact4BigText('')
        setFact4SmallText('')


    }
    return (
        <div className={styles.back} >
            <div className="container">
                <div className={styles.admnBody}>
                    <h2><Link href={'/'}>Обратно на сайт</Link></h2>
                    <div className={styles.mainPlate}>
                        <h4>Введите новое название и нажмите кнопку сохранить</h4>
                        <h4 className={styles.h4}>Имена пунктов меню</h4>
                    <div className={styles.menus}> 
                        <div>
                            <p>Текущее имя</p>
                            <h4>{getPageText.data?.menu1}</h4>
                            <p className={styles.newName}>Новое имя</p>
                            <input type="text" className={styles.input} value={menu1} onChange={(e)=>setMenu1(e.target.value)}/>
                        </div>
                        <div>
                            <p>Текущее имя</p>
                            <h4>{getPageText.data?.menu2}</h4>
                            <p className={styles.newName}>Новое имя</p>
                            <input type="text" className={styles.input} value={menu2} onChange={(e)=>setMenu2(e.target.value)}/>
                        </div>
                        <div>
                            <p>Текущее имя</p>
                            <h4>{getPageText.data?.menu3}</h4>
                            <p className={styles.newName}>Новое имя</p>
                            <input type="text" className={styles.input} value={menu3} onChange={(e)=>setMenu3(e.target.value)}/>
                        </div>
                        <div>
                            <p>Текущее имя</p>
                            <h4>{getPageText.data?.menu4}</h4>
                            <p className={styles.newName}>Новое имя</p>
                            <input type="text" className={styles.input} value={menu4} onChange={(e)=>setMenu4(e.target.value)}/>
                        </div>
                        <div>
                            <p>Текущее имя</p>
                            <h4>{getPageText.data?.menu5}</h4>
                            <p className={styles.newName}>Новое имя</p>
                            <input type="text" className={styles.input} value={menu5} onChange={(e)=>setMenu5(e.target.value)}/>
                        </div>
                        <div>
                            <p>Текущее имя</p>
                            <h4>{getPageText.data?.menu6}</h4>
                            <p className={styles.newName}>Новое имя</p>
                            <input type="text" className={styles.input} value={menu6} onChange={(e)=>setMenu6(e.target.value)}/>
                        </div>
                    </div>
                    <h4>Блоки фактов</h4>
                    <div className={styles.facts}>
                    <div className={styles.col}>
                        <div className={styles.factPlate}>
                            <p>Текущий верхний текст</p>
                            <h4>{getPageText.data?.fact1TopText}</h4>
                            <p>Новый верхний текст</p>
                            <input type="text" className={styles.input} value={fact1TopText} onChange={(e)=>setFact1TopText(e.target.value)}/>
                        </div>
                        <div className={styles.factPlate}>
                            <p>Текущий средний текст</p>
                            <h4>{getPageText.data?.fact1BigText}</h4>
                            <p>Новый средний текст</p>
                            <input type="text" className={styles.input} value={fact1BigText} onChange={(e)=>setFact1BigText(e.target.value)}/>
                        </div >
                        <div className={styles.factPlate}>
                            <p>Текущий нижний текст</p>
                            <h4>{getPageText.data?.fact1SmallText}</h4>
                            <p>Новый нижний текст</p>
                            <input type="text" className={styles.input} value={fact1SmallText} onChange={(e)=>setFact1SmallText(e.target.value)}/>
                        </div>
                    </div>
                    {/* ///////////////////////////////////////// */}
                    <div className={styles.col}>
                        <div className={styles.factPlate}>
                            <p>Текущий верхний текст</p>
                            <h4>{getPageText.data?.fact2TopText}</h4>
                            <p>Новый верхний текст</p>
                            <input type="text" className={styles.input} value={fact2TopText} onChange={(e)=>setFact2TopText(e.target.value)}/>
                        </div>
                        <div className={styles.factPlate}>
                            <p>Текущий средний текст</p>
                            <h4>{getPageText.data?.fact2BigText}</h4>
                            <p>Новый средний текст</p>
                            <input type="text" className={styles.input} value={fact2BigText} onChange={(e)=>setFact2BigText(e.target.value)}/>
                        </div >
                        <div className={styles.factPlate}>
                            <p>Текущий нижний текст</p>
                            <h4>{getPageText.data?.fact2SmallText}</h4>
                            <p>Новый нижний текст</p>
                            <input type="text" className={styles.input} value={fact2SmallText} onChange={(e)=>setFact2SmallText(e.target.value)}/>
                        </div>
                    </div>

                    {/* ///////////////////////////////////////// */}

                    <div className={styles.col}>
                        <div className={styles.factPlate}>
                            <p>Текущий верхний текст</p>
                            <h4>{getPageText.data?.fact3TopText}</h4>
                            <p>Новый верхний текст</p>
                            <input type="text" className={styles.input} value={fact3TopText} onChange={(e)=>setFact3TopText(e.target.value)}/>
                        </div>
                        <div className={styles.factPlate}>
                            <p>Текущий средний текст</p>
                            <h4>{getPageText.data?.fact3BigText}</h4>
                            <p>Новый средний текст</p>
                            <input type="text" className={styles.input} value={fact3BigText} onChange={(e)=>setFact3BigText(e.target.value)}/>
                        </div >
                        <div className={styles.factPlate}>
                            <p>Текущий нижний текст</p>
                            <h4>{getPageText.data?.fact3SmallText}</h4>
                            <p>Новый нижний текст</p>
                            <input type="text" className={styles.input} value={fact3SmallText} onChange={(e)=>setFact3SmallText(e.target.value)}/>
                        </div>
                    </div>
                    
                    {/* ///////////////////////////////////////// */}

                    <div className={styles.col}>
                        <div className={styles.factPlate}>
                            <p>Текущий верхний текст</p>
                            <h4>{getPageText.data?.fact4TopText}</h4>
                            <p>Новый верхний текст</p>
                            <input type="text" className={styles.input} value={fact4TopText} onChange={(e)=>setFact4TopText(e.target.value)}/>
                        </div>
                        <div className={styles.factPlate}>
                            <p>Текущий средний текст</p>
                            <h4>{getPageText.data?.fact4BigText}</h4>
                            <p>Новый средний текст</p>
                            <input type="text" className={styles.input} value={fact4BigText} onChange={(e)=>setFact4BigText(e.target.value)}/>
                        </div >
                        <div className={styles.factPlate}>
                            <p>Текущий нижний текст</p>
                            <h4>{getPageText.data?.fact4SmallText}</h4>
                            <p>Новый нижний текст</p>
                            <input type="text" className={styles.input} value={fact4SmallText} onChange={(e)=>setFact4SmallText(e.target.value)}/>
                        </div>
                    </div>
                     


                        
                        
                    </div>    
                    <button onClick={newText} className={styles.smallBtn}>Сохранить</button>
                    </div> 
                </div>
            </div>
        </div>
        
    )
   
}

