import propTypes from 'prop-types';

export const Button = ({onClick}) => {
  return (
    <div className="Button-wrapper">
      <button onClick={onClick} className="Button">Load more</button>
      </div>
  )
}

Button.propTypes = {
onClick: propTypes.func,
}