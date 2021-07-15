import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm () {
    return (
<section className = 'search section_type_narrow'>
    <form className = 'search__form'>
        <input className = 'search__input' type = 'input' placeHolder = 'Фильмы'>
        </input>
        <button className = 'search__button'></button>
        </form>
        <FilterCheckbox/>
    </section>
    )
}

export default SearchForm;