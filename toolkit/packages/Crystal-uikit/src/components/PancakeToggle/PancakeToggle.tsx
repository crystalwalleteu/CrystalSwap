import React from "react";
import { PancrystalStack, PancrystalInput, PancrystalLabel } from "./StyledPancrystalToggle";
import { PancrystalToggleProps, scales } from "./types";

const PancrystalToggle: React.FC<PancrystalToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <PancrystalStack scale={scale}>
    <PancrystalInput id={props.id || "crystal-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancrystalLabel scale={scale} checked={checked} htmlFor={props.id || "crystal-toggle"}>
      <div className="crystals">
        <div className="crystal" />
        <div className="crystal" />
        <div className="crystal" />
        <div className="butter" />
      </div>
    </PancrystalLabel>
  </PancrystalStack>
);

export default PancrystalToggle;
