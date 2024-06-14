import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import { NotFoundPage } from '../index';
import { MemoryRouter } from 'react-router-dom';

const mockHistoryNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockHistoryNavigate,
}));
describe('NotFoundPager', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should handle Go Home', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByText('Go Home');
    fireEvent.click(button);

    expect(mockHistoryNavigate).toHaveBeenCalledWith('/');
  });

  it('should handle Go Back', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByText('Go Back');
    fireEvent.click(button);

    expect(mockHistoryNavigate).toHaveBeenCalledWith('/');
  });
});
