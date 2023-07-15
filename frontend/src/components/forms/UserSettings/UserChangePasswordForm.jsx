import React from "react";
import {FormFeedback, Input, Label} from "reactstrap";

import FormContainer from "../FormContainer";
import FormSubmit from "../FormSubmit";
import FormHeader from "../FormHeader";

const UserChangePasswordForm = (props) => {
  const {onSubmit} = props;
  return (
    <FormSubmit onSubmit={onSubmit}>
      <FormHeader>
        <h1>Change Password</h1>
      </FormHeader>

      <FormContainer>
        <Input
          name="currentPassword"
          placeholder="Old Password"
          type="password"
          data-testid="old-password-input"
          required
        />
        <Label>Old Password</Label>
        <FormFeedback data-testid="old-password-feedback">
          Required
        </FormFeedback>
      </FormContainer>

      <FormContainer>
        <Input
          name="newPassword"
          placeholder="New Password"
          type="password"
          data-testid="new-password-input"
          required
        />
        <Label>New Password</Label>
        <FormFeedback data-testid="new-password-feedback">
          Required
        </FormFeedback>
      </FormContainer>

      <FormContainer>
        <Input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          data-testid="confirm-password-input"
          required
        />
        <Label>Confirm Password</Label>
        <FormFeedback data-testid="confirm-password-feedback">
          Required
        </FormFeedback>
      </FormContainer>
    </FormSubmit>
  );
};

export default UserChangePasswordForm;
