<template>
  <div
    ref="iconRef"
    style="display: inline-flex"
    :style="{ fontSize: `${size}px`, color: color as any }"
  ></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { Ant, AntJson, AntName } from './Ant';

const val = {
  [AntName]: AntJson,
};

const props = defineProps({
  name: { default: 'Ant' as keyof typeof val },
  type: { default: 'up' as Ant },
  size: { default: '20' },
  color: { default: undefined as unknown },
});

const iconRef = ref<HTMLDivElement>();
const viewBoxStr = '#{viewBox}';
const viewBoxDefault = '0 0 1024 1024';
const str = {
  svg: [
    `<svg style="width: 1em;height: 1em;vertical-align: middle;overflow: hidden;" viewBox="${viewBoxStr}" version="1.1" xmlns="http://www.w3.org/2000/svg">`,
    '</svg>',
  ],
  get0: (replacestr: string) => {
    return str.svg[0].replace(viewBoxStr, replacestr);
  },
  getPath: (param: { d: string; fill?: string }) => {
    return `<path d="${param.d}" fill="${param.fill ?? 'currentColor'}" />`;
  },
};
onMounted(() => {
  const color = ['color:black;', 'color:red;'];
  const sobj = val[props.name];
  if (!sobj) {
    console.info(
      `%c sicon组件传入name<%c${props.name}%c> 不存在`,
      `${color[0]} font-size:12px`,
      color[1],
      color[0]
    );
    return;
  }
  // let obj: {} = sobj[props.type];
  let obj: NonNullable<unknown> = sobj[props.type];
  if (!obj) {
    const color = ['color:black;', 'color:red;'];
    console.info(
      `%c sicon组件传入name<%c${props.name}%c> => type<%c${props.type}%c> 不存在`,
      `${color[0]} font-size:12px`,
      color[1],
      color[0],
      color[1],
      color[0]
    );
    return;
  }
  let res = '';
  if (typeof obj === 'string') {
    res = `${str.get0(viewBoxDefault)}<path d="${obj}" fill="currentColor" />${str.svg[1]}`;
  } else {
    let objt: { d: string[]; fill: { [key: string]: number[] }; viewBox?: string } = obj;
    res = str.get0(objt.viewBox ?? viewBoxDefault);
    const getFill = (fill: { [key: string]: number[] }, index: number) => {
      const fillkeys = Object.keys(fill);
      const colors = props.color;

      for (let i = 0; i < fillkeys.length; i++) {
        const key = fillkeys[i];
        const nums = fill[key];
        if (nums.includes(index)) {
          if (colors) {
            if (Array.isArray(colors)) return colors[i] ?? colors[colors.length - 1];
            return colors;
          } else {
            return key;
          }
        }
      }

      return 'currentColor';
    };

    objt.d.forEach((item, index) => {
      res += str.getPath({
        d: item,
        fill: getFill(objt.fill, index),
      });
    });
    res += str.svg[1];
  }

  iconRef.value!.innerHTML = res;
});
</script>
