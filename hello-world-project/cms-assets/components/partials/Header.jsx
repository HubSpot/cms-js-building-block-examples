import headerStyles from '../../styles/header.module.css';
import { usePageUrl } from '@hubspot/cms-components';

export default function Header(props) {
  const { origin } = usePageUrl();
  const pageUrlHome = `${origin}/hello-world-home`;
  const pageUrlTodo = `${origin}/hello-world-todo`;
  const pageUrlCars = `${origin}/hello-world-cars`;

  return (
    <header className={headerStyles.header}>
      <h1>Hello {props.headerTitle}</h1>
      <p>The World Sends Greetings!</p>
      <nav className={headerStyles.nav}>
        <a href={pageUrlHome}>Home</a>
        <a href={pageUrlTodo}>ToDo</a>
        <a href={pageUrlCars}>Cars</a>
      </nav>
    </header>
  );
}
