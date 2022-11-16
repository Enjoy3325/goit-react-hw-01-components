import PropTypes from 'prop-types';
import { Title, SectionStat, StatList, Item } from './Statistics.styled';
export function Statistics({ title = 'Upload stats', stats }) {
  function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <SectionStat>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            className="item"
            key={id}
            style={{ backgroundColor: randomHexColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </SectionStat>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
