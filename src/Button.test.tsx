import Button from './Button'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Button Component', () => {

  it('should render with red background if disabled', () => {
    render(
      <Button
        onClick={() => {}}
        disabled={false}
      >
        Click me
      </Button>
    )

    const button = screen.getByRole('button', {name: 'Click me'})

    expect(button).toHaveStyle({
      backgroundColor: 'green'
    })

  })

  it('should call onClick prop on click', () => {
    const onClick = jest.fn()

    render(
      <Button
        onClick={onClick}
        disabled={false}
      >
        Click me
      </Button>
    )

    const button = screen.getByText(/click me/i)

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledWith(1)
    
  })
})