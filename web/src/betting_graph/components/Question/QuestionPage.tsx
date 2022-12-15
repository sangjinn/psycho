import React, { Component, PureComponent, useState, useEffect } from "react";
import QuestionButton from "../QuestionButton/QuestionButton";
import QuestionEnd from "../QuestionEnd/QuestionEnd";
import QuestionToday from "../QuestionToday/QuestionToday";

const QuestionPage = () => {
  return (
    <div>
      <div className="QuestionPageTitle">오늘의 질문</div>
      <QuestionToday />
      <QuestionEnd />
    </div>
  );
};

export default QuestionPage;
