import React from "react";

export function Measure({ name, unit, value, color }) {
  return (
    <div className="Measure" style={{ color: color }}>
      <div className="Measure--value">
        <span>
          {value}
          {unit && <span className="Measure--unit">{unit}</span>}
        </span>
      </div>
      <div className="Measure--name">{name}</div>
    </div>
  );
}
