import React from 'react';
import './CompleteStatusComponent.scss';

const CompleteStatusComponent = () => {
  return (
    <div className="completeStatusComponent">
      <ol className="completeStatus">
        <li className="statusSpace">
          <div className="statusCheckbox2" />
          <span className="nonState">주문서 작성</span>
        </li>
        <li className="statusSpace">
          <div className="statusCheckbox2" />
          <span className="nonState">주문 검토</span>
        </li>
        <li className="statusSpace">
          <div className="statusCheckbox2" />
          <span className="nonState">결제</span>
        </li>
        <li className="statusSpace">
          <div className="statusCheckbox1" />
          <span>주문 최종 확인</span>
        </li>
      </ol>
    </div>
  );
};

export default CompleteStatusComponent;
