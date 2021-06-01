import React from 'react'
import Styled from 'styled-components';

const OnlyShowInStockProductsCehckBox = ({onChangeHandler, isOnlyShowInStockChecked}) => {
    return (
        <Div>
            <input type='checkbox' checked={isOnlyShowInStockChecked} onChange={onChangeHandler} />
            <label className='label'>Only In Stock Products</label>
        </Div>
    )
}

export default OnlyShowInStockProductsCehckBox

const Div = Styled.div`

display: flex;
gap: 0.5rem;

.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
}


`

