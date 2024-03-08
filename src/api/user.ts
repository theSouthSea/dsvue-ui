export interface IUser {
  name: string;
  date: string;
  address: string;
}
export interface UserRes {
  data: IUser[];
  total: number;
}
interface GetUserListParams extends Omit<IUser, 'date'> {
  index: number;
  size: number;
}
export function getUserList(params?: GetUserListParams): Promise<UserRes> {
  return new Promise((resolve, reject) => {
    console.log('params', params);
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
        const res = {
          code: 200,
          msg: 'ok',
          data: {
            list: [
              {
                id: 1,
                name: '萧敏',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '1976-11-13',
                address: '宁夏回族自治区 中卫市 中宁县',
                date: '1977-01-02 10:01:04',
              },
              {
                id: 2,
                name: '崔娟',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '1979-03-28',
                address: '湖南省 湘潭市 湘乡市',
                date: '1987-08-05 08:23:05',
              },
              {
                id: 3,
                name: '蒋涛',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '1996-05-16',
                address: '河南省 洛阳市 涧西区',
                date: '2018-01-08 17:12:33',
              },
              {
                id: 4,
                name: '雷静',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '1994-03-12',
                address: '广东省 潮州市 潮安区',
                date: '2012-09-23 21:48:41',
              },
              {
                id: 5,
                name: '朱洋',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '2000-04-12',
                address: '西藏自治区 阿里地区 普兰县',
                date: '1975-10-14 15:50:37',
              },
              {
                id: 6,
                name: '萧敏',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '2016-08-25',
                address: '澳门特别行政区 离岛 -',
                date: '2008-03-29 01:12:19',
              },
              {
                id: 7,
                name: '马艳',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '2021-09-24',
                address: '山东省 东营市 东营区',
                date: '2008-11-23 16:38:46',
              },
              {
                id: 8,
                name: '白勇',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '2021-12-08',
                address: '江西省 上饶市 上饶县',
                date: '1991-05-03 17:50:38',
              },
              {
                id: 9,
                name: '江敏',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '1973-01-13',
                address: '河北省 邯郸市 成安县',
                date: '1986-04-08 08:03:12',
              },
              {
                id: 10,
                name: '魏超',
                avatar: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
                birthday: '2012-10-28',
                address: '内蒙古自治区 通辽市 奈曼旗',
                date: '1982-04-12 00:15:23',
              },
            ],
            total: 100,
          },
        };
        resolve({
          data: res.data.list,
          total: res.data.total,
        });
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  });
}
