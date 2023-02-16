import '../styles.css';
import PropTypes from 'prop-types';
export function Button({onClick }) {
  return (
    <button onClick={onClick} className="Button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

