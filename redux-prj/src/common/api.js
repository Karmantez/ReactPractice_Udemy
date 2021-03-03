// export default function callApiLike() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

export default function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) resolve();
      // eslint-disable-next-line prefer-promise-reject-errors
      else reject('callApiLike 실패');
    });
  }, 1000);
}
