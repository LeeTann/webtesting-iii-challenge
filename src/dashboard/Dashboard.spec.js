// Test away
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Dashboard from './Dashboard'

describe('<Dashboard /> Tests', () => {
    it('should display component without failing', () => {
        render(<Dashboard />)
    })
})