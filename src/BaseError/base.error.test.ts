class BaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

// describe('Given a BaseError ', () => {
//   describe('When it is thrown', () => {
//     test('Then it should have name BaseError', () => {
//       const error = new BaseError('message');

//       try {
//         throw error;
//       } catch (error: unknown) {
//         expect((error as Error).name).toBe('BaseError');
//       }
//     });
//   });
// });

class ValidationError extends BaseError {
  constructor(message: string) {
    super(message);
  }
}

describe('Given a ValidationError', () => {
  describe('When it is thrown', () => {
    test('Then it should have name ValidationError', () => {
      const error = new ValidationError('message');

      try {
        throw error;
      } catch (error: unknown) {
        expect((error as Error).name).toBe('ValidationError');
      }
    });
  });
});
