import React, { ReactElement } from "react";
import styles from "../../styles/buttons.module.css"

export interface ButtonProps{
  children:ReactElement | string, 
  onClick?:()=>void
}

export default function FancyButton({children, onClick}:ButtonProps) {
  return (
    <button className={styles.fancyButton} onClick={onClick}>
      {children}
    </button>
  )
}