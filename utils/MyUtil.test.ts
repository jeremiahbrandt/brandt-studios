import { add } from './MyUtil';

it('works correctly', () => {
    // Arrange
    const expected = 7;

    // Act
    const actual = add(3, 4);

    // Assert
    expect(actual).toStrictEqual(expected);
})