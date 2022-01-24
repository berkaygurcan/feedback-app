import PropTypes from 'prop-types';


function Header({text, bgColor, textColor}) { //app.js de headera geçilen propsun elde edilmesi
  const headerStyls = {
    backgroundColor: bgColor,
     color: textColor
  };
  
    return (
  <header style={headerStyls}> 
      <div className="container">
          <h2>{text}</h2>
      </div>
  </header>
  )
}

Header.defaultProps = { //props pass edilmesse default değer ayarlaması
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
};

Header.propTypes = {
    text: PropTypes.string, //prop type kontrolü
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header;
