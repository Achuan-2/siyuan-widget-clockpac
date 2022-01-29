# Clock-Pac

> The name is commbined with Clock and Pac-man.
> It will display date today and time now,with a progressing bar.
> Preview: https://achuan-2.github.io/siyuan-widget-clockpac/

![preview.png](https://cdn.jsdelivr.net/gh/Achuan-2/siyuan-widget-clockpac/preview.png)

这是一个非常非常简单的小挂件，本 JS 小白目前希望通过写一些小挂件来入门 JavaScript。

名字 Clock-Pac 是 Clock 时钟 +Pacman 吃豆人的组合，功能很简单，展示当前的时间，copy 按钮可以复制当前时间到剪贴板。
最下方是一天已过去多少的进度条，图形创意来自贪吃蛇 + 吃豆人。

预览界面 [https://achuan-2.github.io/siyuan-widget-clockpac/](https://achuan-2.github.io/siyuan-widget-clockpac/)

## 特色

界面支持根据挂件块的宽度自适应大小

进度条会根据一天的时间点来变色
* 0-6 点：红色
* 6-12 点 ：绿色
* 12-18 点：黄色
* 18-20 点：橙色
* 20-22 点：粉色
* 22-24 点：红色


## 我的主要使用场景

我的 dailynote 流程会简要记录一天什么时刻做了什么事情，所以我会把本挂件插入到 dailynote 模板相应位置的上方。通过本挂件来显示当前时间，记录时点击 Copy 复制当前时间粘贴到下方大纲列表中。

```markdown
<iframe src="http://127.0.0.1:6806/widgets/Clock-Pac" data-src="http://127.0.0.1:6806/widgets/Clock-Pac" data-subtype="widget" border="0" frameborder="no" framespacing="0" allowfullscreen="true"  style="display: flex;"></iframe>
```