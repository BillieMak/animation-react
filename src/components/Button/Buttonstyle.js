import { Button } from "@mui/material"
import styled from "@mui/system/styled"


export const Buttonstyle = styled(Button)`
    background-color: transparent;
    background-image: linear-gradient(90deg, #ec5046 0%, #e702bf 100%);
    border-radius: 30px 30px 30px 30px;
    color: white;
    cursor: pointer;
    appearance: none;
    outline: none;
    border: none;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 500;
    padding: 12px 0;
    letter-spacing: 0.25px;
    position: relative;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: bold;
    borderRadius: "30px";
    color: "white";
    font-weight: "bold";
    margin-left: "12px";
    &:hover{
      background-image:
        linear-gradient(90deg, #e702bf 0%, #ec5046 100%);
    };`

