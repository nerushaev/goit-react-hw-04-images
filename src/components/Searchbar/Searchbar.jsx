import propTypes from 'prop-types'
import './Searchbar.css'

export default function Searchbar({ onSubmit}) {
    return (
      <header className="Searchbar">
  <form className="SearchForm" onSubmit={onSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>
          <input
      className="SearchForm-input"
      type="text"
      name="search"
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
}