import {Button} from "reactstrap";
const ButtonTemplate = ({buttonTitle, btnColor}) => {
  return <Button color={btnColor}> {buttonTitle}</Button>;
};

export default ButtonTemplate;
