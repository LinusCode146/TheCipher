'use client'

import styles from './page.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.question}>What Actually Is A Cipher?</div>
        <div className={styles.images}>
            <Image src={'/img/locked.png'} alt={'locked'} width={40} height={40} />
            <Image src={'/img/unlocking.png'} alt={'locked'} width={40} height={40} />
            <Image src={'/img/unlocked.png'} alt={'locked'} width={40} height={40} />
        </div>
        <span className={styles.line}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>

        <article className={styles.text}>
            A Cipher is an encrypting technique used to encrypt a normal text into new form which does not in any way
            indicate it's old meaning. For Decryption you most often need specific information which you can only get
            by the person who encrypted the text. But...  not always
        </article>
        <article className={styles.text2}>
            Ap anpgcqu eyar tteowheonyydttomi  riym eesi ot coangbhenocttt.t  a ihri necytn ehiu sdt nrp  omltx nonwfr
            hc osnti n a niaei' l enn.FrDcyto o ototnne pcfcifrainwihyucnol e ytepro h nrpe h et u..ntawyCes
            ritneeoctnaei  mid  awic sdagoepnusf deinmoh   yt  sweydexB.ols
        </article>

        <button type={"button"} className={styles.glow}>Ciphers</button>
    </div>
  )
}
