import { CloudSun } from "phosphor-react";

type HeaderProps = {};

export function Header({}: HeaderProps): JSX.Element | null {
  return (
    <header className="Header">
      <h1>
        <CloudSun size={64} weight="duotone" />
        <span>Weather</span>
      </h1>
    </header>
  );
}
