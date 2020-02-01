import PropTypes from 'prop-types';

const friendShape = PropTypes.shape({
  id: PropTypes.string,
  uid: PropTypes.string,
  friendUid: PropTypes.string,
  name: PropTypes.string,
  friendImgUrl: PropTypes.string,
});

export default { friendShape };
