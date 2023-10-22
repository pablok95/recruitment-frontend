import './AppFooter.styles.scss';

export default function OrganismAppFooter() {
  return <footer className="container app-footer">&copy; {new Date().getFullYear()}</footer>;
}
