import React from "react";
import '../styles/ui_componentens/introduction.css'


interface IntroductionProps {
    message: string
}

export const Introduction: React.FC<IntroductionProps> = (props: IntroductionProps) => {
    return (
      <div className={'introduction-container'} >
          <b>{props.message}</b>
      </div>
    );
}