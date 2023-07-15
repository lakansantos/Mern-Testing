import React from "react";
import UserChangePasswordForm from "../../../components/Forms/UserSettings/UserChangePasswordForm";
import useChangePassword from "./useChangePassword";

const Index = () => {
  const {onChangePassword} = useChangePassword();
  return (
    <div className="form-wrapper">
      <UserChangePasswordForm onSubmit={onChangePassword} />
    </div>
  );
};

export default Index;
