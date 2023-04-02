import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import CarouselItem from './CarouselItem'

describe('Carousel Item', () => {
    it('Carousel item mounted with the data passed', () => {
        const { getByText, getByTestId } = render(<CarouselItem
            title={'abc'}
            description={'My Carousel item description'}
            icon={'example1.svg'}
            />
        )
        expect(getByText('abc')).toBeInTheDocument()
        expect(getByText('My Carousel item description')).toBeInTheDocument()
        expect(getByTestId('carousel-icon')).toBeVisible()
    })
})
