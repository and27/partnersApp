import { render, screen } from '@testing-library/react-native';
import MatchList from '../components/MatchList';
import useMatchStore from '../stores/useMatchStore';

jest.mock('../stores/useMatchStore', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('MatchList', () => {
  beforeEach(() => {
    (useMatchStore as unknown as jest.Mock).mockReturnValue([
      { id: 1, name: 'Match 1' },
      { id: 2, name: 'Match 2' }
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a list of matches', async () => {
    render(<MatchList />);
    expect(await screen.findByText(/Match 1/i)).toBeDefined();
    expect(await screen.findByText(/Match 2/i)).toBeDefined();
  });

  it('no matches', async () => {
    (useMatchStore as unknown as jest.Mock).mockReturnValue([]);
    render(<MatchList />);
    expect(await screen.findByText(/No matches/i)).toBeDefined();
  });
});
