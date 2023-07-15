import React, {useState} from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

const DropDownLimit = ({toggle, isOpen, handleLimit}) => {
  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle caret>Limit</DropdownToggle>
        <DropdownMenu>
          {[5, 20, 50].map((item, key) => {
            return (
              <DropdownItem key={key} onClick={() => handleLimit(item)}>
                {item}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default DropDownLimit;
