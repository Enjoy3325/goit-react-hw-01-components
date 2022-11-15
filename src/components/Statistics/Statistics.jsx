// import PropTypes from 'prop-type';

export function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Statistics.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       optionalProperty: PropTypes.string,
//       requiredProperty: PropTypes.number.isRequired,
//     })
//   ),
// };
