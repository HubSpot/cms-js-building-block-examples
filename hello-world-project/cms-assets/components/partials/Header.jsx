import headerStyles from '../../styles/header.module.css';

export default function Header(props) {
  const brandColor = JSON.parse(props.brandColor);

  const navLinks = [
    {
      href: '/hello-world-home',
      label: 'Home',
    },
    {
      href: '/hello-world-todo',
      label: 'Todo',
    },
    {
      href: '/hello-world-cars',
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
