import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import WordclockFUll from '../Wordclock/Wordclock'; // Update with your actual import path

describe('WordclockFUll component', () => {
    test('renders without crashing', () => {
        const time = new Date().getTime();
        const style = 'nightmode';
        render(<WordclockFUll style={style} time={time} />);
    });
});