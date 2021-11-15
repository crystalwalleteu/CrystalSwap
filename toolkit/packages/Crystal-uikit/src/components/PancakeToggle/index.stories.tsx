import React, { useState } from "react";
import PancrystalToggle from "./PancrystalToggle";

export default {
  title: "Components/PancrystalToggle",
  component: PancrystalToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <PancrystalToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <PancrystalToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <PancrystalToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
