import { Buttonstyle } from "./Buttonstyle";


export const Button = ({ children,...props}) => {
  return <Buttonstyle  {...props}>{children}</Buttonstyle>;
};
