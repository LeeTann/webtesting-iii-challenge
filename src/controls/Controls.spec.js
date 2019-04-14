// Test away!
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Controls from './Controls'

describe('<Controls /> Tests', () => {
    it('should display component without failing', () => {
        render(<Controls />)
    })
})