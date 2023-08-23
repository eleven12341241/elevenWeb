# elevenWeb

`打造属于自己的Web ✨`

## [系统概览](docs/system/system.md)

## 源代码管理规范

### 代码分支管理

#### 分类

- master 分支 (主线分支`protected`)
- 功能分支 (从 master 分支 check 出来的分支，合入 master 后会被删除)
- 补丁分支 (从 master 分支 check 出来的分支，合入 master 后会被删除)

#### 命名规范

- **pr 标题**、**commit 信息** 必须以 `功能关键字:` 开头，命名形式为`[功能关键字]: [名称]`，**分支** 名必须以 `功能关键字/`开头，命名形式为`[功能关键字]/[名称]`

  功能关键字介绍如下：

  - feat :sparkles: - 新功能（feature）
  - refactor :hammer: - 重构原有功能或模块
  - fix :bug: - 修补 bug
  - docs :memo: - 文档（document）
  - style :lipstick: - 格式（不影响代码运行的变动）
  - test :white_check_mark: - 增加测试
  - chore :green_heart: - 构建过程或辅助工具的变动
  - revert - 撤销
  - close - 关闭 issue
  - release - 发布版本

### Issue 管理

issue 用于 Bug 追踪和需求管理。开发时应先新建 Issue，再新建对应的功能分支或 bugfix 分支，`在向 master或 per-release分支或 release分支提 PR时需在Description里引入对应的issue编号`›，待 PR 被合并后方可关闭对应的 issue。

#### 分类

按 issue 的功能分类:

- bug： 代码逻辑与实现与设计及与预期不符的问题
- todo： 计划实现的需求
- doing: 正在实现的功能
- testable：已完成开发和 review，提测的功能或者 bug 修复
- finished：已测试完成的需求（待发版走查后关闭）
- verified： 测试验证修复的问题

### Bug 管理

| BUG 等级        | 处理方式                 |
| --------------- | ------------------------ |
| critical (致命) | 需立即修复或重做         |
| high (严重)     | 需尽快修复               |
| medium (一般)   | 跟据实际情况决定修改进度 |
| low (建议)      | 由产品决定是否修改       |

#### bug 等级说明

> **critical**: 导致系统崩渍、死机、死循环；阻碍测试的执行，大部分测试用例无法执行；造成数据泄露的安全性问题;导致程序模块丟失或未实现；软件错误导致数据丟失；产品需求未实现;
>
> - 程序无响应，无法执行下一步操作
> - 其他导致无法测试的错误
> - 模块无法启动或异常退出
> - 运行过程中系统崩渍、死机、重启
> - 功能设计与需求严重不符
> - 业务流程错误

> **high**: 严重地影响系统要求或基本功能的实现，且没有更正办法；是常规操作中经 常发生或非常规操作中不可避免的主要问题，功能实现不完善
>
> - 错误的波及面广，影响到其他重要功能正常实现
> - 非常规操作导致的程序崩溃、死机、死循环 (非常规操作：用户使用软件时不会进行的操作）
> - 密码等明文显示导致信息暴露
> - 功能实现不完整、不正确
> - 外观和界面难以接受的缺陷

> **medium**: 不影响产品的运行、不会成为故障的起因、但会导致用户操作麻烦，影响产品的整体质量
>
> - 各种提示框信息使用不统一，未采用行业术语
> - 必填项无提示，或者提示不规范
> - 可输入区域与只读区域没有明显的区分标志
> - 程序不健壮，操作未给出明确提示
> - 显示格式不规范，数字、日期等格式
> - 界面不能及时刷新，影响功能实现
> - 各种页面展示不一致问题、错别字问题
> - 布局结构不合理等

> **low**: 建议进行但不强制进行的修改；不会给发布的准确性或可用性带来任何严重影响
>
> - 从用户角度提出的易用性测试建议
> - 通过测试挖掘出来的潜在需求

### NPM

- 统一使用`NPM`管理`Node.js`依赖，**不要引入 yarn**

- 首次拉完代码安装依赖前使用

  - `npm cache clean --force` 清除本地缓存
  - `npm config set registry http://package.nemoface.com/repository/npm` ,设置好镜像仓库再 `npm install`

- 不要用其他的镜像源，以免在`package-lock.json`中引入问题

## 代码规范

### 通用

- 时间的参数与输出统一使用 `标准UTC时间`，时间参数校验规则为，`startTime`<`endTime`, 不改变用户传入的时间值(例如时间大于当前时间的情况)

- 请求参数使用`驼峰式`命名

- `JSON` 对象的 key 使用`驼峰式`命名

- `JSON` 中无值或为空的 key`不做`序列化

- 接口形式尽量符合`RESTFUL` 标准

- 接口正常返回值统一使用如下结构 (200 系列 status）

- 通过`环境变量`传入的配置，使用`模块名_环境变量名`并且所有字母`大写`的形式, 例如`API_DB_HOST`

  ```json
  {
    "limit": ,//[int] optional limit 页大小
    "offset": ,//[int] optional offset 页偏移量
    "count":, //[int] optional 根据查询条件查到的总结果数或者返回值原本只有count字段（求和）
    "data":,//  [array,object] required
  }

  ```

- 接口异常返回值统一使用如下结构（400 及 500 系列 status）

  ```json
  {
    "error":, //[string] #required 错误描述
    "detail":, //[arrar] #optional 错误详情
  }

  ```

- HTTP Status

  - `200` 获取到数据
  - `201` 成功创建
  - `202` 成功修改
  - `204` http body 无内容（成功删除)
  - `400` 参数不合法或者输入数据不合法
  - `401` 无权限

### 数据库

- 数据库字段定义添加注释

### 数据库

- 数据库字段定义添加注释

### Javascript

#### 注释

- As short as possible（如无必要，勿增注释）：尽量提高代码本身的清晰性、可读性。

- As long as necessary（如有必要，尽量详尽）：合理的注释、空行排版等，可以让代码更易阅读、更具美感。

- 单行注释 必须独占一行。`//` 后跟一个空格，缩进与下一行被注释说明的代码一致。

- 多行注释避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，使用多个单行注释。

- 函数/方法注释包含函数说明，有参数和返回值时必须使用注释标识。参数和返回值注释必须包含类型信息和说明；当函数是内部函数，外部不可访问时，可以使用 @inner 标识；

  ```js
  /**
   * 函数描述
   *
   * @param {string} p1 参数1的说明
   * @param {string} p2 参数2的说明，比较长
   *     那就换行了.
   * @param {number=} p3 参数3的说明（可选）
   * @return {Object} 返回值描述
   */
  function foo(p1, p2, p3) {
    var p3 = p3 || 10;
    return {
      p1: p1,
      p2: p2,
      p3: p3,
    };
  }
  ```

#### 命名

- **变量, 使用 `Camel` 命名法。`var loadingModules = {};`**

- 常量, 使用全部字母大写，单词间下划线分隔的命名方式。`var HTML_ENTITY = {};`

- **函数, 使用 `Camel` 命名法。**

- **函数的参数, 使用 `Camel` 命名法。**

- **类, 使用 `Pascal` 命名法**

- **类的 方法 / 属性, 使用 `Camel` 命名法**

  ```js
  function TextNode(value, engine) {
    this.value = value;
    this.engine = engine;
  }

  TextNode.prototype.clone = function () {
    return this;
  };
  ```

- 由多个单词组成的 缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致。

  ```js
  function XMLParser() {}
  function insertHTML(element, html) {}
  const httpRequest = new HTTPRequest();
  ```

### 命名语法

- **类名，使用名词。`function Engine(options) {}`**

- **函数名，使用动宾短语。`function getStyle(element) {}`**

- boolean 类型的变量使用 `is` 或 `has` 开头。

- Promise 对象用动宾短语的进行时表达。

  ```js
  const loadingData = ajax.get("url");
  loadingData.then(callback);
  ```

### 其他

- **类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null**
- **`'0'` 字符串 0, `[]` 空数组, `{`} 空对象上面的判断都是 true**
- 尽量使用`const`和`let`关键字，不用`var`
- **提交代码前使用`npm run lint` 测试，无`warning`和`error`**

### HTML

#### 严格嵌套约束

```html
- inline-Level 元素，仅可以包含文本或其它 inline-Level 元素; -
<a
  >里不可以嵌套交互式元素<a
    >、<button>
      、<select>
        等; -
        <p>里不可以嵌套块级元素</p>
        <div>
          、
          <h1>
            ~
            <h6>
              、
              <p>、</p>
              <ul>
                /
                <ol>
                  /
                  <li>
                    、
                    <dl>
                      /
                      <dt>/</dt>
                      <dd>
                        、
                        <form>等。</form>
                      </dd>
                    </dl>
                  </li>
                </ol>
              </ul>
            </h6>
          </h1>
        </div>
      </select>
    </button></a
  ></a
>
```

### CSS

#### 声明顺序

相关属性应为一组，推荐的样式编写顺序

- 1. Positioning

- 2. Box model

- 3. Typographic

- 4. Visual

  ```html
  .declaration-order { /* Positioning */ position: absolute; top: 0; right: 0;
  bottom: 0; left: 0; z-index: 100; /* Box model */ display: block; box-sizing:
  border-box; width: 100px; height: 100px; padding: 10px; border: 1px solid
  #e5e5e5; border-radius: 3px; margin: 10px; float: right; overflow: hidden; /*
  Typographic */ font: normal 13px "Helvetica Neue", sans-serif; line-height:
  1.5; text-align: center; /* Visual */ background-color: #f5f5f5; color: #fff;
  opacity: .8; /* Other */ cursor: pointer; }
  ```

#### 代码组织

- 以组件为单位组织代码段；
- 制定一致的注释规范；
- 组件块和子组件块以及声明块之间使用一空行分隔，子组件块之间三空行分隔；
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动；

#### Class 和 ID

- 使用语义化、通用的命名方式；
- **使用连字符 `-` 作为 ID、Class 名称界定符，`不要`驼峰命名法和下划线；**
- 避免选择器嵌套层级过多，尽量少于 3 级；
- 避免选择器和 Class、ID 叠加使用；

## 浏览器与分辨率要求

### 浏览器支持

- IE 10 及以上
- Chrome 56 及以上
- Firefox 51 及以上

### 分辨率

- 最小分辨率 `1440*900`
