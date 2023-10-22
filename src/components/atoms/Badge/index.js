import './Badge.styles.scss';

export default function AtomBadge({ label, status }) {
  const badgeStyles = {
    TODO: 'badge--todo',
    IN_PROGRESS: 'badge--in-progress',
    COMPLETED: 'badge--completed'
  };

  return <div className={`badge ${status ? badgeStyles[status] : ''}`}>{label}</div>;
}
