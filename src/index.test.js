//index.testing.js
import {capitalize} from "./index";

test('Capitalize first letter', () => {
    expect(capitalize('alex')).toBe('Alex')
});