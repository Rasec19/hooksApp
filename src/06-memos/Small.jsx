import { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log('Me volvi a dibujar :c')

    return (
        <small>{ value }</small>
    )
})
