import React from "react";
import {changeUserPassword} from "../../../api/user";

const useChangePassword = () => {
  const onChangePassword = async (data) => {
    try {
      await changeUserPassword(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {onChangePassword};
};

export default useChangePassword;
