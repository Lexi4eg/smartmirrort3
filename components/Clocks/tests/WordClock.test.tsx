import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wordclock from '../Wordclock/Wordclock'; // Update with your actual import path

describe('Wordclock component', () => {
    test('renders without crashing', () => {
        const time = new Date().getTime();
        const style = 'nightmode';
        render(<Wordclock style={style} time={time} />);
    });
});