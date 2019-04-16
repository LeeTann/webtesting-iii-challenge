// Test away!
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer'
import { toHaveClass } from 'jest-dom/extend-expect'

import Display from './Display'

describe('<Display /> Tests', () => {
    it('should display component without failing', () => {
        render(<Display />)
    })

    it('Should display gate open and unlock by default', () => {
        const { getByText } = render(<Display />)

        getByText(/open/i)
        getByText(/unlock/i)
    })

    it('Should display gate closed and locked when clicked', () => {
        const { getByText } = render(<Display closed={true} locked={true} />)

        getByText(/closed/i)
        getByText(/locked/i)
    })

    it('Should display red-led when closed', () => {
       
        const { getByText } = render(<Display closed={true} />)

        const closed = getByText(/closed/i)

        expect(closed).toHaveClass('red-led')
        
    })
})