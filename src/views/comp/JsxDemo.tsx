import { defineComponent, onMounted, reactive } from 'vue';
interface Data {
  id: number;
  name: string;
  age: number;
  sex: '男' | '女';
  // address: string;
  // phone: string;
  // email: string;
  // company: string;
  // companyAddress: string;
  // companyPhone: string;
  // companyEmail: string;
  // companyWebsite: string;
  // companyDescription: string;
  // companyLogo: string;
  // companyLogoUrl: string;
  // companyLogoUrl2: string;
}
interface State {
  loading: boolean;
  list: Data[];
}
export default defineComponent({
  setup() {
    const state = reactive<State>({
      loading: true,
      list: [],
    });
    const getData = () => {
      setTimeout(() => {
        state.loading = false;
        state.list = [
          { id: 1, name: '张三', age: 18, sex: '男' },
          { id: 2, name: '李四', age: 20, sex: '女' },
        ];
      }, 2000);
    };
    onMounted(() => {
      getData();
    });
    return () => (
      <div>
        {state.list.map((item) => (
          <div key={item.id}>
            <div>姓名:{item.name}</div>
            <div>年龄:{item.age}</div>
            <div>性别:{item.sex}</div>
          </div>
        ))}
      </div>
    );
  },
});
