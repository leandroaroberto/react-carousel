
import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

import Carousel from './Carousel'

describe('Carousel', () => {

    //mock array of items (children)
    const children = [
        {id: 1, title: 'Mock Title 1', description: 'Mock description 1', url: 'http://my-first-carousel', icon: "example1.svg"},
        {id: 2, title: 'Mock Title 2', description: 'Mock description 2', url: 'http://my-first-carousel', icon: "example2.svg"},
        {id: 3, title: 'Mock Title 3', description: 'Mock description 3', url: 'http://my-first-carousel', icon: "example3.svg"},
        {id: 4, title: 'Mock Title 4', description: 'Mock description 4', url: 'http://my-first-carousel', icon: "example2.svg"},
        {id: 5, title: 'Mock Title 5', description: 'Mock description 5', url: 'http://my-first-carousel', icon: "example1.svg"},
        {id: 6, title: 'Mock Title 6', description: 'Mock description 6', url: 'http://my-first-carousel', icon: "example3.svg"},
    ]

    beforeAll(() => {
        expect(children[2]).toMatchObject({title: 'Mock Title 3', description: 'Mock description 3', icon: "example3.svg"})
        expect(children[5]).toMatchObject({title: 'Mock Title 6', description: 'Mock description 6', icon: "example3.svg"})
    })

    it('Check the current slide', () => {
        const { getByTestId } = render(<Carousel
            delay={0}
            children={children}
            />
        )
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 1</div>')
    })

    it('Check the next slide', () => {
        const { getByTestId } = render(<Carousel
            delay={0}
            children={children}
            />
        )
        //click the next button
        fireEvent.click(screen.getByTestId('carousel-next-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 2</div>')
    })

    it('Check the previous slide', () => {
        const { getByTestId } = render(<Carousel
            delay={0}
            children={children}
            />
        )
        //click the previous button
        fireEvent.click(screen.getByTestId('carousel-previous-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 6</div>')
    })

    it('Check if I can go to a specific slide', () => {
        const { getByTestId } = render(<Carousel
            delay={0}
            children={children}
            />
        )
        //click the item 4 button
        fireEvent.click(screen.getByTestId('carousel-go-to-item-3-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 4</div>')
        //click the item 1 button
        fireEvent.click(screen.getByTestId('carousel-go-to-item-0-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 1</div>')
        //click the item 4 button
        fireEvent.click(screen.getByTestId('carousel-go-to-item-3-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 4</div>')
        //click the item 6 button
        fireEvent.click(screen.getByTestId('carousel-go-to-item-5-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 6</div>')
        //click the item 2 button
        fireEvent.click(screen.getByTestId('carousel-go-to-item-1-button'))
        //check whether the slide been shown is the one expected
        expect(getByTestId('carousel-container')).toContainHTML('<div class="text-5xl py-4" data-testid="carousel-title">Mock Title 2</div>')
    })
})
