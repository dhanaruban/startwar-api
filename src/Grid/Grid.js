import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  width: fit-content;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  background-color: #000000;
`;

export const GridImage = styled.div`
  flex-grow: 1;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
  position: relative;
  width: 200px;
  height: 200px;
  opacity: 0.7;
  border: 2px solid white;
  border-radius: 5px;
`;
export const PlanetName = styled.h1`
  font-size:1.5em;
  text-align: center;
  color: white;
  position: absolute; 
  top: 100px; 
  left: 0; 
  width: 100%;
  font-weight: bold;
`;
export const Diameter = styled.h1`
  font-size: 0.7em;
  color: white;
  position: absolute;
  text-align: left;
  top: 8px;
  padding-left: 15px;
  font-style: oblique;
  font-weight: bold;
`;
export const ResidentCount = styled.h1`
  font-size: 0.8em;
  color: white;
  position: absolute;
  text-align: left;
  bottom: 20px;
  padding-left: 15px;
  font-style: oblique;
  font-weight: bold;
`;
export const ResidentNames = styled.h1`
  font-size:0.8em;
  text-align: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: oblique;
`;

const GridItemWrapper = styled.div`
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  :before {
    content: "";
    display: table;
    padding-top: 100%;
  }
`;

export const GridItem = ({ forwardedRef, ...props }) => (
    <GridItemWrapper ref={forwardedRef} {...props} />
);