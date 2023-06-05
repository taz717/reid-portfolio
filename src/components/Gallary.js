import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import '../App.css'
import cat0 from '../img/1.jpg'
import cat1 from '../img/2.jpg'
import cat2 from '../img/3.jpg'

const images = [
    { key: 0, img: cat0, title: 'cat0' },
    { key: 1, img: cat1, title: 'cat1' },
    { key: 2, img: cat2, title: 'cat2' },
]

export default function Gallary() {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {images.map((item) => (
                <ImageListItem key={item.key} className='Gallary-img'>
                    <img
                        key={item.key}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}