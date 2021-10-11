import { Icon } from "@iconify/react";
import React from "react";
import {
  HelperText,
  Input,
  InputBox,
  InputCover,
  Label,
} from "../../Styles/auth/login";
import { colors } from "../../utils/Colors";

const CustomInput = ({ valid, error, set, validate, label, icon, type }) => {
  return (
    <InputCover>
      <Label for={label}>{label}</Label>
      <InputBox style={{ borderColor: valid ? "lightgray" : "red" }}>
        <Icon
          icon={icon}
          width="20"
          color={!valid ? "red" : `${colors.headColor}`}
        />
        <Input
          id={label}
          autoComplete="off"
          placeholder={label}
          type={type}
          onChange={(e) => set(e.target.value)}
          onClick={() => validate(true)}
        />
      </InputBox>
      {!valid && <HelperText>{error}</HelperText>}
    </InputCover>
  );
};

export default CustomInput;
