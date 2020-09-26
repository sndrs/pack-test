import { test } from './test';
let a = { b: 'b' };
export const x = a?.b ? 'b' : test;
export const cli = () => console.log(x);
