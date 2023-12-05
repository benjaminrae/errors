/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-new */
// process.on('unhandledRejection', (reason, promise) => {
//   console.log('Unhandled Rejection at:', promise, 'reason:', reason);
// });

// process.on('uncaughtException', error => {
//   console.log('Uncaught Exception thrown', error);
// });
new Promise((_, reject) => {
  reject(new Error('reject promise'));
});

throw new Error('Error');
