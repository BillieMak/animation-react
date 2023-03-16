import { Button } from "@mui/material"
import styled from "@mui/system/styled"


export const Buttonstyle = styled(Button)`
    background-color: transparent;
    background-image: linear-gradient(90deg, #ec5046 0%, #e702bf 100%);
    color: white;
    cursor: pointer;
    appearance: none;
    outline: none;
    border: none;
    font-family: "Poppins";
    /*font-size: 16px;*/ 
    font-weight: 500;
    padding: 10px 25px;
    letter-spacing: 0.25px;
    position: relative;
    /* line-height: 24px; */
    text-transform: uppercase;
    font-weight: ${(props)=>{
      console.log(props)
      return "bold"
    }};
    border-radius: 30px;
    color: "white";
    font-weight: "bold";
    &:hover{
      background-image:
        linear-gradient(90deg, #e702bf 0%, #ec5046 100%);
    };`

