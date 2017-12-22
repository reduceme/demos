在开发的过程中，经常遇到以下的一些操作，所以把实现这些操作的方法提取出来，在以后的开发过程中遇到了可以直接调用。现在方法还不齐全，以后会逐渐增加。
## 该文件具有以下方法
1. 扩展Date类型，用于格式化时间`Date.prototype.format();`
2. 格式化时间`formatTime()`
3. 获取URL参数，并返回对象`GetRequest()`
4. input只能输入数字`isOnlyNum(id, childInfo)`
5. 获取单选框选中的值`getRadio(name)`
6. 获取复选框选中的值并返回以“,”隔开的字符串`getCheckBox(id)`
7. 对象去重`objDelRepeat(data)`
8. 对象分组`objGroupByKey()`
9. 函数去抖动，使用场景：函数防抖就是让某个函数在上一次执行后，满足等待某个时间内不再触发此函数后再执行，而在这个等待时间内再次触发此函数，等待时间会重新计算`debounce(action, time)`
10. 函数节流，使用场景：每间隔某个时间去执行某函数，避免函数的过多执行`throttle(action, delay)`
11. 获取每月有多少天`getDaysNum(year, month)`
12. 获取每月第一天是星期几，0代表星期天，1代表星期一，以此类推`getDayOfWeek(year, month)`
13. ajax的contentType`ajax(userinfo)`
14. 字符串分组`splitStr(item, string)`
15. 复选框取消选中`isChecked()`
16. 数组删除指定元素`array.removeByValue(val)`
17. 数组去重，写入原型链`array.deWeight()`