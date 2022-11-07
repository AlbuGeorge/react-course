import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

test('renders Hello Word as a text', () => {
  // Arrange
  render(<Greeting />)

  //Act
  // ... nothing

  const linkElement = screen.getByText(/hello world/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders good to see you if the button was not clicked', () => {
  render(<Greeting />)

  const outputElement = screen.getByText(/good to see you/i)
  expect(outputElement).toBeInTheDocument()
})

test('render changed if the button was clicked', () => {
  render(<Greeting />)

  const buttonElement = screen.getByRole('button')
  userEvent.click(buttonElement)

  const outputElement = screen.getByText(/changed/i)
  expect(outputElement).toBeInTheDocument()
})

test('render if the text is not showing after button pressed', () => {
  render(<Greeting />)

  const buttonElement = screen.getByRole('button')
  userEvent.click(buttonElement)

  const outputElement = screen.queryByText(/good to see you/i)
  expect(outputElement).toBeNull()
})
