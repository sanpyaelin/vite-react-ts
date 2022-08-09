import { describe, expect, it } from 'vitest'
import { render, screen, userEvent } from 'utils/test-utils'
import App from './App'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(
      screen.getByText(
        /Vite \+ React \+ Typescript \+ Eslint \+ Prettier \+ Husky \+ Airbnb JavaScript Style Guide/i,
      ),
    ).toBeInTheDocument()
  })

  it('should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.queryByText(/count is: 1/i))
  })
})
