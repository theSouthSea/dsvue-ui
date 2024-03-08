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
export function listApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
        const res = {
          code: 200,
          msg: 'ok',
          data: [
            {
              id: 1,
              name: '锺勇',
              avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
              birthday: '1986-12-01',
            },
            {
              id: 2,
              name: '任涛',
              avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
              birthday: '1982-03-11',
            },
            {
              id: 3,
              name: '雷平',
              avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
              birthday: '1978-07-20',
            },
            {
              id: 4,
              name: '罗秀兰',
              avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
              birthday: '1971-10-31',
            },
            {
              id: 5,
              name: '沈洋',
              avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
              birthday: '1990-07-20',
            },
            {
              id: 6,
              name: '潘娜',
              avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
              birthday: '1986-06-01',
            },
          ],
        };
        resolve(res.data);
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  });
}
