export function submitApi(text: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
        resolve({
          status: 'ok',
          text: text,
        });
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  });
}
export function cancelApi(text: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
        resolve({
          status: 'ok',
          text: text,
        });
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  });
}
