# 发布交接

## 2026-11-10 Be4D 业务案例发布

- 分支 `be4d-showcase-20261110` 原提交 `b1f2ca1` 基于线上 `fe5addb`，包含业务案例 01/02、回放滚动保护和文章/说明图排版。
- 发布前将两个 HTML 内重复的 34 处 JPEG 数据 URI 提取为 10 张共用 WebP（保持 1024px，quality 90）。两个模块预计压缩传输合计从约 9.2 MB 降到约 1.4 MB，iframe 保留 lazy loading。
- Case 01 的嵌套 srcdoc 有 `img-src data:` 策略；图片外置后必须动态允许当前站点的 `assets/be4d-business/` 路径，并显式设置文档 base URL，不能只替换图片地址。
- 链接检查需避开 script 正文里的 HTML 模板表达式，保留 script 标签自己的 src 属性检查；否则 `${p.image}` 等表达式会被误报为路径。动态图片目录另行核对。
- Playwright 对 CSS 缩放 iframe 的 locator.click 坐标可能偏移；按 iframe 实际矩形与内部元素矩形换算坐标，已确认案例二默认第二步及三步切换正确。
- 本地 Chrome 检查商品图、步骤切换、滚动稳定、402px 无横向溢出通过；44 个 HTML 链接与相关 JS 语法检查通过。
