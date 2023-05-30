import * as React from 'react';
import '~/App.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallary(images) {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {images.map((item) => (
                <ImageListItem key={item.img} className='Gallary-img'>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={'${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x'}
                        alt={item.title}
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}