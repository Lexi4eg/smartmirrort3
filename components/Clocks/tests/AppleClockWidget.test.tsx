import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppleClockWidget from '../AppleClockWidget'; // Update with your actual import path

describe('AppleClockWidget component', () => {
    test('renders without crashing', () => {
        const time = new Date().getTime();
        const style = 'nightmode';
        const { container } = render(<AppleClockWidget style={style} time={time} />);

        // Check if the SVG element is present
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();

        // Check if the correct number of line elements are present
        const lineElements = container.querySelectorAll('line');
        expect(lineElements.length).toBe(77); // 12 hour lines + 60 minute lines + 5 lines for the clock hands
    });
});