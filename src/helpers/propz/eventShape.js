import PropTypes from 'prop-types';

const eventShape = PropTypes.shape({
  id: PropTypes.string,
  uid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  posted: PropTypes.string,
});

export default { eventShape };
