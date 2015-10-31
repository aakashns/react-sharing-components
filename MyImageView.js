var { requireNativeComponent, PropTypes } = require('react-native');

var iface = {
  name: 'ImageView2',
  propTypes: {
    src: PropTypes.string,
    borderRadius: PropTypes.number,
    resizeMode: PropTypes.oneOf([
      'cover',
      'contain',
      'stretch',
    ]),
    size: PropTypes.number,
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    translateX: PropTypes.number,
    translateY: PropTypes.number,
    rotation: PropTypes.number,
  },
};

module.exports = requireNativeComponent('MyImageView', iface);
