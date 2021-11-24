//
interface func {
    (): any;
}
  
export function debounce(fn: func, delay: number) {
    var ctx: any;
    var args: any;
    var timer = null as any;
  
    var later = function () {
      fn.apply(ctx, args);
      // 当事件真正执行后，清空定时器
      timer = null;
    };
  
    return function () {
      // @ts-ignore
      ctx = this;
      args = arguments;
      // 当持续触发事件时，若发现事件触发的定时器已设置时，则清除之前的定时器
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
  
      // 重新设置事件触发的定时器
      timer = setTimeout(later, delay);
    };
  }
  

const rangeRandom = (max:number, min: number) => Math.floor(Math.random() * (max - min + 1) + min);

export { rangeRandom }
