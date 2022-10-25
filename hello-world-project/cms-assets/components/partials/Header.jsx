import headerStyles from '../../styles/header.module.css';
import { usePageUrl } from '@hubspot/cms-components';

export default function Header(props) {
  const { origin } = usePageUrl();
  const pageUrlHome = `${origin}/hello-world-home`;
  const pageUrlTodo = `${origin}/hello-world-todo`;
  const pageUrlCars = `${origin}/hello-world-cars`;

  const brandColor = JSON.parse(props.brandColor);

  const navLinks = [
    {
      href: pageUrlHome,
      label: 'Home',
    },
    {
      href: pageUrlTodo,
      label: 'Todo',
    },
    {
      href: pageUrlCars,
      label: 'Cars',
    },
  ];

  return (
    <header className={headerStyles.header}>
      <h1>Hello World</h1>
      <p>The World Sends Greetings!</p>
      <nav className={headerStyles.nav}>
        {navLinks.map((navLink) => (
          <a
            style={{
              color: brandColor.color,
              borderColor: brandColor.color,
            }}
            key={navLink.label}
            href={navLink.href}
          >
            {navLink.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
