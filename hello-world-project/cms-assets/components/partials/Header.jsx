import headerStyles from '../../styles/header.module.css'

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <h1>
                Hello World
            </h1>
            <p>
                The world sends greetings
            </p>
            <nav className={headerStyles.nav}>
                <a href="/hello-world-home">
                    Home
                </a>
                <a href="/hello-world-main">
                    Main
                </a>
            </nav>
        </header>
    )
}