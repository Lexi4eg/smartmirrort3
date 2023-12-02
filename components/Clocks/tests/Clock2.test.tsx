import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Clock2 } from '../Clock2'; // Update with your actual import path

// Mock the dynamic import
jest.mock('next/dynamic', () => () => {
    return function DynamicComponent() {
        return <div>Dynamic Component</div>;
    };
});

describe('Clock2 component', () => {
    test('renders without crashing', () => {
        const time = new Date().getTime();
        const style = 'nightmode';
        render(<Clock2 style={style} time={time} />);
    });
});