import React, {useEffect, useState} from 'react';
import '../assets/style/components/search.scss';
import debounce from 'lodash/debounce';

const Search = (props) => {
  const { onChange, text } = props;
  const [valueText, setValueText] = useState(text);

  const onChangeSearchInput = (evt) => {
    setValueText(evt.target.value);    
    onChange(evt.target.value);
  };

  return (
    <div>
      <section className='busqueda'>        
        <input 
          type='text'
          value={valueText}
          className='busqueda__input' 
          placeholder='Ej: Torta Chocolate' 
          onChange={onChangeSearchInput} 
        />                        
      </section>
    </div>
  )
};

export default Search;
