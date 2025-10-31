# Formbricks 集成与配置指南

> Formbricks 4.1.0 | Environment ID: `cmheyc4dr0009qt01kj98n0kt`

## ⚡ 3 步快速开始

### 1. 创建 Actions（5 分钟）⭐ 必须完成

登录 https://form.keveon.app → Actions → + New Action → 选择 **Code Action**

**创建以下 9 个 Actions**（名称必须完全一致）：
```
page_view
hero_cta_clicked
service_card_clicked
contact_form_started
form_field_completed
contact_form_submitted
section_viewed
page_time_spent
scroll_depth
```

### 2. 创建第一个问卷（5 分钟）

Surveys → + New Survey：
- **触发条件**: Action "service_card_clicked"
- **问题**: "您对我们的服务感兴趣吗？"（多选）
- **选项**: 咨询了解 / 准备办理 / 立即办理 / 只是看看
- 点击 **Publish**

### 3. 测试（2 分钟）

```bash
pnpm dev
node quick-test.mjs
```

---

## 📋 重要说明

- **免费版限制**：`setUserId`、`setAttribute`、`setEmail` 等功能仅企业版可用
- **社区版/免费版**：Formbricks 会自动管理用户追踪，通过 `track()` 事件属性记录信息即可
- **问卷显示设置**：在 Formbricks 后台配置"直到提交回应"即可让问卷持续显示

## 🎯 已集成的事件追踪

### 事件列表

| 事件名称 | 触发时机 | 事件属性 |
|---------|---------|---------|
| `page_view` | 页面加载完成 | `page_name`, `page_url` |
| `hero_cta_clicked` | 点击 Hero 区按钮 | `button_text`, `button_position`, `target_section` |
| `service_card_clicked` | 点击服务卡片 | `service_name` |
| `contact_form_started` | 开始填写表单 | - |
| `form_field_completed` | 完成表单字段 | `field_name` |
| `contact_form_submitted` | 提交表单 | `has_name`, `has_phone`, `has_email`, `has_message`, `message_length` |
| `section_viewed` | 区块进入视野 | `section_id`, `section_title` |
| `page_time_spent` | 页面关闭时 | `duration_seconds`, `page_name` |
| `scroll_depth` | 滚动到特定位置 | `depth_percentage` (25/50/75/100) |

**注意**：所有用户信息通过事件属性记录，免费版不支持独立的用户属性（Attributes）功能。

---

## 🔧 Formbricks 后台配置步骤（简化版）

### 第 1 步：创建 Actions（代码行动）⭐ 必须

Actions 在 Formbricks 4.x 中需要手动创建。

1. 登录 Formbricks: https://form.keveon.app
2. 进入你的项目（Environment ID: `cmheyc4dr0009qt01kj98n0kt`）
3. 左侧菜单 → **Actions**
4. 点击右上角 **+ New Action**
5. 选择 **Code Action**（因为是通过 JavaScript 代码触发的）

#### 需要创建的 9 个 Actions：

每个 Action 的创建步骤：
1. 点击 **+ New Action**
2. 选择 **Code Action**
3. 输入 Action 名称（完全按照下面的名称）
4. 描述可选（建议填写，方便记忆）
5. 点击 **Create**

**Action 列表**：

| Action 名称 | 描述（建议填写） |
|------------|-----------------|
| `page_view` | 用户访问页面 |
| `hero_cta_clicked` | 用户点击 Hero 区的按钮 |
| `service_card_clicked` | 用户点击服务卡片 |
| `contact_form_started` | 用户开始填写联系表单 |
| `form_field_completed` | 用户完成表单字段填写 |
| `contact_form_submitted` | 用户提交联系表单 |
| `section_viewed` | 用户浏览页面区块 |
| `page_time_spent` | 记录用户页面停留时间 |
| `scroll_depth` | 记录用户滚动深度 |

**⚠️ 重要**: Action 名称必须完全匹配代码中使用的名称，区分大小写！

---

### 第 2 步：创建你的第一个调研问卷 🎨

#### 推荐从这个开始：服务兴趣调研

1. 左侧菜单 → **Surveys**
2. 点击 **+ New Survey**
3. 选择调研类型：
   - **App Survey** (如果是 Web 应用)
   - **Website Survey** (如果是网站)

4. **基本设置**：
   - 问卷名称: "服务兴趣调研"
   - 选择显示方式: Modal (弹窗) 或 Card (卡片)

5. **添加问题**：
   - 点击 **Add Question**
   - 问题类型: **Multiple Choice** (多选)
   - 问题文本: 
     ```
     您对我们的服务感兴趣吗？请告诉我们您的需求：
     ```
   - 选项:
     - 咨询了解
     - 准备办理
     - 立即办理
     - 只是看看

6. **设置触发条件（Targeting）**：

   **When (什么时候显示):**
   - 选择: **Action is performed**
   - 选择 Action: `service_card_clicked`
   - 延迟: 1 second (可选)

   **Who (显示给谁):**
   - 选择: **All visitors** (所有访客)
   - 或者: **Segment** → 基于 attributes 筛选

   **Where (在哪里显示):**
   - URL matching: `*` (所有页面)
   - 或者指定特定页面: `http://localhost:4321` 或你的域名

7. **显示设置（Recontact Options）**：
   - 每个用户显示次数: **Once** (建议)
   - 或者: 每天一次 / 每次访问

8. **样式设置（可选）**：
   - 主题色: 使用你网站的主色（如 #2563eb）
   - 位置: 右下角 / 中央 / 左下角
   - 圆角、阴影等

9. 点击 **Publish** 发布问卷

---

## 🎨 5 个推荐的调研问卷配置

### 1️⃣ 服务兴趣调研（最容易配置）

**目的**: 了解用户对哪个服务感兴趣

**触发条件**:
```
When: Action "service_card_clicked" is performed
Who: All visitors
```

**问题**:
1. "您对我们的服务感兴趣吗？请告诉我们您的需求："
   - 类型: Multiple Choice
   - 选项: 咨询了解 / 准备办理 / 立即办理 / 只是看看

---

### 2️⃣ 表单放弃原因调研

**目的**: 了解用户为什么开始填表但没提交

**触发条件**:
```
When: Action "contact_form_started" is performed
Delay: 30 seconds
Who: Users who have NOT performed "contact_form_submitted"
```

**问题**:
1. "看起来您刚才在填写咨询表单，遇到什么问题了吗？"
   - 类型: Multiple Choice
   - 选项: 表单太复杂 / 不想留联系方式 / 还没想好 / 其他

---

### 3️⃣ 提交后满意度调研

**目的**: 收集用户对网站的整体反馈

**触发条件**:
```
When: Action "contact_form_submitted" is performed
Delay: immediate
Who: All visitors
```

**问题**:
1. "感谢您的咨询！请问您对我们网站的整体体验如何？"
   - 类型: Rating (1-5 星)

2. "您是如何了解到我们的？"
   - 类型: Single Choice
   - 选项: 搜索引擎 / 朋友推荐 / 社交媒体 / 广告 / 其他

---

### 4️⃣ 高参与度用户深度调研

**目的**: 从高意向用户获取深度反馈

**触发条件**:
```
When: Action "scroll_depth" is performed
AND: Event property "depth_percentage" equals 75 或更高
Who: All visitors
```

**问题**:
1. "看起来您对我们的服务很感兴趣，能分享一下您的想法吗？"
   - 类型: Open Text

2. "您目前是否有具体的商标服务需求？"
   - 类型: Single Choice
   - 选项: 是，近期就需要 / 是，未来可能需要 / 只是了解一下 / 没有需求

---

### 5️⃣ 快速退出用户调研

**目的**: 了解用户快速离开的原因

**触发条件**:
```
When: Exit Intent (用户即将离开页面)
Who: All visitors
```

**问题**:
1. "您这么快就要离开了，能告诉我们原因吗？"
   - 类型: Multiple Choice
   - 选项: 找不到需要的信息 / 页面加载太慢 / 内容不够吸引人 / 只是随便看看 / 其他

---

## 🔍 如何在 Formbricks 4.x 中使用 Attributes

### 查看用户属性

1. 左侧菜单 → **People**
2. 点击任意用户
3. 在用户详情页面可以看到：
   - User ID
   - Email
   - **Attributes** 区域会显示所有通过 `setAttribute()` 设置的属性

### 基于属性创建问卷受众

在创建问卷时，在 **Who** 部分：

1. 选择 **Segment**
2. 点击 **+ Add condition**
3. 选择 **Attribute**
4. 选择属性名（如 `interested_service`）
5. 设置条件（equals, contains, exists 等）
6. 输入值（如 "商标注册"）

示例：
```
Show survey to users where:
- Attribute "interested_service" equals "商标注册"
- AND Attribute "lead_status" equals "contacted"
```

---

## 🧪 测试你的配置

### 方法 1: 使用测试脚本

```bash
# 启动开发服务器
pnpm dev

# 运行测试
node quick-test.mjs
```

### 方法 2: 手动测试（推荐）

1. 在浏览器中打开 http://localhost:4321
2. 打开开发者工具（F12）→ Console 标签
3. 执行测试：

```javascript
// 测试 1: 验证 Formbricks 加载
console.log('Formbricks loaded:', typeof window.formbricks !== 'undefined');

// 测试 2: 查看所有方法
console.log('Available methods:', Object.keys(window.formbricks));

// 测试 3: 手动触发事件
window.formbricks.track('test_event', { test: 'value' });

// 测试 4: 设置属性
window.formbricks.setAttribute('test_key', 'test_value');

// 测试 5: 查看是否触发
// 在 Console 中会看到 Formbricks 的日志输出
```

4. 进行实际操作：
   - ✓ 点击"了解服务"按钮
   - ✓ 滚动到服务区块
   - ✓ 点击一个服务卡片（应该会看到问卷弹出，如果已配置）
   - ✓ 填写联系表单
   - ✓ 提交表单

5. 检查 Formbricks 后台：
   - 进入 **People** 查看是否有新用户
   - 查看用户的 Attributes 是否正确设置
   - 进入 **Responses** 查看问卷回复（如果有）

---

## 📊 查看数据和分析

### 查看 Actions 数据

1. 左侧菜单 → **Actions**
2. 点击任意 Action
3. 可以看到：
   - 触发次数
   - 触发用户列表
   - 事件属性

### 查看问卷回复

1. 左侧菜单 → **Surveys**
2. 点击你的问卷
3. 查看 **Responses** 标签
4. 可以导出数据为 CSV

### 查看用户档案

1. 左侧菜单 → **People**
2. 点击任意用户查看：
   - 用户 ID 和邮箱
   - 所有 Attributes
   - 触发的 Actions 历史
   - 问卷回复历史

---

## 💡 实际应用场景

### 场景 1: 了解用户对商标注册服务的兴趣

**用户行为**:
1. 用户点击"商标注册"服务卡片
2. 触发 `service_card_clicked` 事件
3. 自动设置属性 `interested_service = "商标注册"`

**你可以做什么**:
- 立即显示"服务兴趣调研"问卷
- 了解用户的具体需求阶段
- 在 People 页面筛选所有对商标注册感兴趣的用户
- 针对性地发送营销邮件

---

### 场景 2: 挽回放弃表单的用户

**用户行为**:
1. 用户开始填写表单（触发 `contact_form_started`）
2. 30 秒后未提交（未触发 `contact_form_submitted`）

**你可以做什么**:
- 显示"表单放弃原因"问卷
- 了解用户放弃的原因
- 优化表单设计
- 可以显示简化版表单或提供帮助

---

### 场景 3: 转化后收集反馈

**用户行为**:
1. 用户填写并提交表单
2. 触发 `contact_form_submitted` 事件
3. 自动设置 `lead_status = "contacted"`
4. 如果填写了邮箱，自动设置用户邮箱

**你可以做什么**:
- 立即显示满意度调研
- 了解用户体验
- 识别高质量潜在客户
- 跟进联系

---

## ⚠️ 常见问题

### Q1: 为什么出现 "can't set attributes without a userId" 错误？

**已修复**！这是因为 `setUserId`、`setAttribute`、`setEmail` 等功能仅企业版可用。现在代码已移除这些调用，使用免费版支持的 `track()` 事件即可。

### Q2: 为什么我的问卷不显示？

**检查清单**:
- [ ] Actions 是否已创建？（名称必须完全匹配）
- [ ] 问卷是否已发布？（Status: Published）
- [ ] 触发条件是否正确？
- [ ] URL 匹配规则是否正确？
- [ ] 用户是否已经看过这个问卷？（检查 Recontact 设置）
- [ ] 浏览器控制台是否有错误？

**调试方法**:
```javascript
// 在控制台手动触发事件测试
window.formbricks.track('service_card_clicked', { 
  service_name: '商标注册' 
});
```

---

### Q3: Attributes 在哪里查看？

在 Formbricks 4.x 中：
1. 进入 **People** 页面
2. 点击任意用户
3. 在用户详情页面的 **Attributes** 区域查看

Attributes 是自动创建的，无需手动配置。

---

### Q4: 如何基于 Attributes 筛选用户？

**方法 1: 在 People 页面筛选**
1. People → 右上角的筛选按钮
2. 添加 Attribute 条件

**方法 2: 在创建问卷时筛选**
1. 创建问卷 → Targeting → Who
2. 选择 Segment
3. 添加 Attribute 条件

---

### Q5: 事件属性和用户属性有什么区别？

**事件属性** (Event Properties):
- 随事件一起发送的数据
- 例如: `service_name`, `button_text`
- 用于了解事件的具体内容

**用户属性** (User Attributes):
- 存储在用户档案中的数据
- 通过 `setAttribute()` 设置
- 例如: `interested_service`, `lead_status`
- 可以用于筛选和分段用户

---

## ✅ 配置检查清单

### 第一次配置（必须完成）

- [ ] 在 Formbricks 后台创建了 9 个 Code Actions
- [ ] Actions 名称完全匹配代码中的名称
- [ ] 创建了至少 1 个测试问卷
- [ ] 问卷已发布（Status: Published）
- [ ] 触发条件正确设置

### 测试阶段

- [ ] 运行了 `quick-test.mjs` 脚本
- [ ] 在浏览器中手动测试了各种交互
- [ ] 在控制台中验证了事件触发
- [ ] 在 Formbricks 后台看到了数据

### 上线前

- [ ] 调整了问卷样式匹配网站设计
- [ ] 设置了合理的显示频率
- [ ] 测试了移动端显示效果
- [ ] 准备好了数据分析方案

---

## 📞 需要帮助？

如果遇到问题：

1. **查看浏览器控制台**: 检查是否有 JavaScript 错误
2. **查看 Formbricks 文档**: https://formbricks.com/docs
3. **查看本地测试脚本**: 运行 `node quick-test.mjs`
4. **检查网络请求**: 开发者工具 → Network 标签，查看是否有请求发送到 Formbricks

---

**最后更新**: 2025-11-01  
**适用版本**: Formbricks 4.1.0  
**Environment ID**: cmheyc4dr0009qt01kj98n0kt
