import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async Component', () => {
  test('renders posts if request succeds', () => {
    render(<Async />)

    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).not.toHaveLength(0)
  })
})
