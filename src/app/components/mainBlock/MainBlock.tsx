'use client'

import { useGetPageTextQuery } from '@/app/store/pageTextApi'
import Fact from '../fact/fact'
import styles from './styles.module.scss'


export default function MainBlock(){

const getPageText = useGetPageTextQuery('')

const mockRes = {
    topSmallTextOne:'мы',
    bigTextOne: '1',
    bottomSmallTextOne:'на рынке'
}

    return (
        <div className={styles.mainBlockWrapper}>
                <div className={styles.left}>
                    <div className={styles.travelWrapper}>
                        <h4 className={styles.bigH}>ПУТЕШЕСТВИЕ</h4>
                        <p className={styles.smallText}>на красную планету</p>
                    </div>
                    <div className={styles.startButton}>Начать путешествие</div>
                </div>
                <div className={styles.right}>
                    
                        <div className={styles.factBody}>
                            <p className={styles.factTopText}>{getPageText.data?.fact1TopText}</p>
                            <div className={styles.textBlock}>
                                <h4 className={styles.factBigText}>{getPageText.data?.fact1BigText}</h4>
                                <p className={styles.factBottomText}>{getPageText.data?.fact1SmallText}</p>
                            </div>
                        </div>
                        <div className={styles.factBody2}>
                            <p className={styles.factTopText}>{getPageText.data?.fact2TopText}</p>
                            <div className={styles.textBlock}>
                                <h4 className={styles.factBigText}>{getPageText.data?.fact2TopText}</h4>
                                <p className={styles.factBottomText}>{getPageText.data?.fact2SmallText}</p>
                            </div>
                        </div>
                        <div className={styles.factBody3}>
                            <p className={styles.factTopText}>{getPageText.data?.fact3TopText}</p>
                            <div className={styles.textBlock}>
                                <h4 className={styles.factBigText}>{getPageText.data?.fact3BigText}</h4>
                                <p className={styles.factBottomText}>{getPageText.data?.fact3SmallText}</p>
                            </div>
                        </div>
                        <div className={styles.factBody4}>
                            <p className={styles.factTopText}>{getPageText.data?.fact4TopText}</p>
                            <div className={styles.textBlock}>
                                <h4 className={styles.factBigText}>{getPageText.data?.fact4BigText}</h4>
                                <p className={styles.factBottomText}>{getPageText.data?.fact4SmallText}</p>
                            </div>
                        
                    </div>
                </div>
        </div>
    )
}