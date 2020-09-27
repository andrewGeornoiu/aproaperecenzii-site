import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
           <svg
        width="350"
        height="50"
        viewBox="0 0 192 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <text x="0" y="11" dx fontFamily="Helvetica Neue" fontWeight="bold" textAnchor="start" fill={fill}>
          aproape
        </text>
        <text x="57" y="11" dx fontFamily="Helvetica Neue" fontWeight="100" textAnchor="start" fill="#c4c4c4">
          recenzii
        </text>
        <defs>
          <clipPath id="clip0">
            <rect width="191.156" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="150"
        height="35"
        viewBox="1 0 100 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
           <text x="0" y="15" dx fontFamily="Helvetica Neue" fontWeight="bold" textAnchor="start" fill={fill}>
          aproape
        </text>
        <text x="57" y="15" dx fontFamily="Helvetica Neue" fontWeight="100" textAnchor="start" fill="#c4c4c4">
          recenzii
        </text>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
