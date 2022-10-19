import layoutStyles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return <div className={layoutStyles.layout}>{children}</div>;
}
