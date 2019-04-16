// Test away!
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer'
import { toBeDisabled } from 'jest-dom/extend-expect'

import Controls from './Controls'

describe('<Controls /> Tests', () => {
    it('should display component without failing', () => {
        render(<Controls />)
    })

    it('should display if gate is open/closed and if locked/unlocked', () => {
        const { getByText } = render(<Controls />)

        getByText(/close gate/i)
        getByText(/lock gate/i)
    })

    it('should disable lock gate button when gate is closed', () => {
        const { getByText } = render(<Controls closed={true}/>)

        const button = getByText(/lock gate/i)

        expect(button).toBeDisabled()
    })
})