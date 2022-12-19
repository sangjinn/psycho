import React from "react";
import shepherd from "../../../seoha/service/shepherd";
import BackButton from "../Common/BackButton";
import LargeTitle from "../Common/LargeTitle";
import MainButton from "../Common/MainButton";
import MediumTitle from "../Common/MediumTitle";

function SignUpPage3() {
  const mediumText = `마지막 페이지에요!`;

  const moveToNext = () => {
    shepherd.whip("wonjae", "signUp4");
  };

  return (
    <div>
      <BackButton />
      <LargeTitle text="회원가입" />
      <MediumTitle text={mediumText} />
      <MainButton text="게속" onClick={moveToNext} />
    </div>
  );
}

export default SignUpPage3;
