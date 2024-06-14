import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NewsSection } from '../index';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../../../store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
describe('NewsSection', () => {
  it('should render component without news', () => {
    const mockStore = {
      news: { news: [], isNewsLoading: true, error: '' },
    };

    // @ts-ignore
    useSelector.mockImplementation((callback) => {
      return callback(mockStore);
    });

    render(
      <Provider store={store}>
        <NewsSection />
      </Provider>
    );

    // expect(container).toMatchSnapshot();

    expect(screen.getByText('News Section')).toBeInTheDocument();
  });

  it('should render component with news', () => {
    const mockStore = {
      news: { news: [{ name: 'BCC' }], isNewsLoading: false, error: '' },
    };

    // @ts-ignore
    useSelector.mockImplementation((callback) => {
      return callback(mockStore);
    });
    render(
      <Provider store={store}>
        <NewsSection />
      </Provider>
    );

    expect(screen.getByText('BCC')).toBeInTheDocument();
  });

  it('should delete news by clicking the button', () => {
    const mockStore = {
      news: { news: [{ name: 'BCC' }], isNewsLoading: false, error: '' },
    };

    // @ts-ignore

    useSelector.mockImplementation((callback) => {
      return callback(mockStore);
    });
    // @ts-ignore

    useDispatch.mockReturnValue(jest.fn());
    render(
      <Provider store={store}>
        <NewsSection />
      </Provider>
    );

    expect(screen.getByText('BCC')).toBeInTheDocument();
    const button = screen.getByText('Clear News');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    waitFor(() => {
      expect(screen.getByText('BCC')).not.toBeInTheDocument();
    });
  });
});
