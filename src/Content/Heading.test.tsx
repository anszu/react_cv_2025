import { render } from '@testing-library/react';
import { Heading } from 'src/Content/Heading';

describe('Heading', () => {
    it('should set document title on mount', () => {
        render(<Heading data={{ title: 'CV Title', subtitle: '' }} />);

        expect(document.title).toBe('CV Title');
    });
});
