// Test away!
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Display from './Display'

describe('<Display /> Tests', () => {
    it('should display component without failing', () => {
        render(<Display />)
    })
})