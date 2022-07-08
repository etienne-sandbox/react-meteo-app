import { CloudSun } from "phosphor-react";

export function Header({}) {
  return (
    <header className="Header">
      <h1>
        <CloudSun size={64} weight="duotone" />
        <span>Weather</span>
      </h1>
    </header>
  );
}
