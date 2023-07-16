import React from "react";
import {changeUserPassword} from "../../../api/user";
import {errorPop, successPop} from "../../../components/Toast/Toast";
import {useNavigate} from "react-router-dom";

const useChangePassword = () => {
  const navigate = useNavigate();
  const onChangePassword = async (data) => {
    try {
      const response = await changeUserPassword(data);
      const {mssg} = response;
      successPop(mssg);
      navigate("/views/home");
    } catch (error) {
      console.error(error);
      const {response} = error;
      errorPop(response.data.mssg);
    }
  };

  return {onChangePassword};
};

export default useChangePassword;
