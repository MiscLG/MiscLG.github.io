import React from "react";
import FancyButton, {ButtonProps} from "./FancyButton";
import Link from 'next/link'
interface DownloadProps extends ButtonProps{
  filename:string,
  downloadName?:string,
}
export default function FancyDownloadButton({children, filename,downloadName,onClick}:DownloadProps){

  return (
      <a href={filename} download={downloadName??filename}>
        <FancyButton onClick={onClick}>
          {children}
        </FancyButton>
      </a>
  )

}