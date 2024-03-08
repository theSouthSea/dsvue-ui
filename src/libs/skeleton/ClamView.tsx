import './clam_view.css';
import './skeleton.css';

import { ResponseImpl } from 'bdjf_http';
import { computed, defineComponent } from 'vue';

/**
 * 定义 ClamView 的四种状态
 * 1. LOADING res 为空或者res.code === -100 时状态为LOADING，此时显示骨架屏
 * 2. EMPTY res.code  === 0 且 res.data 为空时
 * 3. SHOW res.code  === 0 且 res.data 不为空时
 * 4. ERROR res.code  ！== 0 时
 **/
type ViewStatusType = 'LOADING' | 'EMPTY' | 'SHOW' | 'ERROR';

export default defineComponent({
  name: 'ClamView',
  props: {
    res: {
      type: ResponseImpl,
      default: () => {
        // 默认显示一个loading
        // return new ResponseImpl().loading();
        return {};
      },
    },
    showLoading: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    emptyText: {
      type: String,
      default: () => {
        return '暂无数据';
      },
    },
    emptyData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    noPackage: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  setup(props, { slots }) {
    // 根据 res 的状态来判断如何显示
    const viewStatusAdapter = (response: ResponseImpl<any>): ViewStatusType => {
      // console.log('----viewStatusAdapter----',response)
      if (props.showLoading) {
        return 'LOADING';
      }
      if (!response) {
        return 'LOADING';
      }
      switch (response.code) {
        case 0:
          if (!response.data || response.data.length === 0) {
            return 'EMPTY';
          } else {
            return 'SHOW';
          }
        case -100:
          return 'LOADING';
        default:
          return 'ERROR';
      }
    };

    // 用 computed 包一下
    const viewStatus = computed<ViewStatusType>(() => {
      return viewStatusAdapter(props.res);
    });

    const noDataView = (text: string) => {
      return <div class='empty_view col-center item-center'>{text}</div>;
    };

    const emptyView = () => {
      if (viewStatus.value === 'EMPTY') {
        return slots.empty ? slots.empty() : noDataView(props.emptyText);
      }
    };

    const errorView = () => {
      if (viewStatus.value === 'ERROR') {
        return slots.error ? slots.error() : noDataView(props.res.msg);
      }
    };

    return () => {
      if (viewStatus.value === 'EMPTY') {
        return emptyView();
      } else if (viewStatus.value === 'ERROR') {
        return errorView();
      } else {
        // noPackage 为 false 时，ClamView将会在 slots 外面包一层 div ，通过给div更换样式来实现状态切换；
        // 为 true 时，将不会包裹div，会通过 vClass 属性传替给 需要使用的地方绑定样式进行切换
        if (props.noPackage) {
          return slots.default({
            data: viewStatus.value === 'LOADING' ? props.emptyData : props.res.data,
            vClass:
              viewStatus.value === 'LOADING'
                ? 'skeleton-view-empty-view'
                : 'skeleton-view-default-view',
          });
        } else {
          return (
            <div
              class={
                viewStatus.value === 'LOADING'
                  ? 'skeleton-view-empty-view'
                  : 'skeleton-view-default-view'
              }
            >
              {slots.default({
                data: viewStatus.value === 'LOADING' ? props.emptyData : props.res.data,
              })}
            </div>
          );
        }
      }
    };
  },
});
