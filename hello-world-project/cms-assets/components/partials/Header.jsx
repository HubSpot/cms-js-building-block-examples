import headerStyles from "../../styles/header.module.css";

import { usePageUrl } from "@hubspot/cms-components";

export default function Header() {
  const { origin } = usePageUrl();
  const pageUrlHome = `${origin}/hello-world-home`;
  const pageUrlTodo = `${origin}/hello-world-todo`;

  return (
    <header className={headerStyles.header}>
      <h1>Hello World</h1>
      <p>The world sends greetings</p>
      <nav className={headerStyles.nav}>
        <a href={pageUrlHome}>Home</a>
        <a href={pageUrlTodo}>ToDo</a>
      </nav>
    </header>
  );
}
