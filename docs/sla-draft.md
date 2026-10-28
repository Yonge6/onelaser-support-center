# SLA 草案 / SLA proposal

**SLA-REVIEW-20261028-01 · 待 Elian 审核 / Pending Elian review**

本页仅供阅读，不构成审核批准、对外服务承诺或已生效配置。当前继续沿用 Zoho 已计算的到期时间；客户回复仍须人工确认。
This is a read-only proposal, not approval, an external service promise or an active configuration. Alerts continue to use Zoho-calculated deadlines. Customer replies require human confirmation.

## 中文

| 指标 | 建议目标 | 计时口径 |
|---|---|---|
| 首次人工回复（普通工单） | 8 个工作小时 | 建议采用 Zoho 营业时间；自动确认和 AI 草稿不计入 |
| 客户追问后的回复 | 12 个工作小时 | 从对应客户来信开始；建议采用 Zoho 营业时间 |
| 普通问题实际解决 | 48 个自然小时 | 建议连续计时；关单本身不证明已解决 |
| 技术问题实际解决 | 5 个工作日 | 沿用经核验的 Zoho 工作日历；复杂问题另记录评估和更新节点 |
| 确认无法解决后的升级 | 2 个工作小时 | 人工记录无法解决时间与接收人；Elian 先接收并确认转交对象 |
| 月度目标达标率 | ≥90% | 分首响、跟进、解决、升级统计，并同时展示数据覆盖率 |

### 优先级首响建议

| 优先级 | 情况 | 人工首响 |
|---|---|---|
| P1 | 机器无法使用，或报告安全风险 | 2 个工作小时 |
| P2 | 核心功能异常，影响客户交单 | 4 个工作小时 |
| P3 | 设置、参数、配件咨询 | 8 个工作小时 |
| P4 | 建议反馈、一般询问 | 8 个工作小时 |

### 待审核的五项决定

1. **是否接受“首响/跟进/升级按工作小时，普通解决按自然小时，技术解决按工作日”的建议？** 采用以上混合口径；工作日历以 Zoho 现有配置核验为准
2. **是否接受 P1/P2/P3/P4 首响分别为 2/4/8/8 个工作小时？** 作为内部目标起草，审核及配置核验后启用
3. **等待客户、配件、物流、技术时，是否暂停 SLA？** 不在本机自行暂停；只有 Zoho 经确认的暂停规则可以生效
4. **升级和逾期提醒先由谁接收？** 当前先由 Elian 接收并确认后续负责人；实际工程师尚需指定
5. **如何处理缺少时限、人工身份或解决证据的工单？** 单列未知，不算达标；达标率只对可判定且已到期的样本计算，同时强制展示覆盖率和未知数量

### 启用前检查

- Elian 明确审核本版本目标和口径
- 核实 Zoho 营业时区、工作日与节假日配置
- 核实人工回复身份、暂停规则及解决证据
- 核实升级接收人，并用代表性工单验算
- 配置生效后独立读回；不因收到“继续做”而自动启用

## English

| Metric | Proposed target | Clock / measurement |
|---|---|---|
| First human reply, standard tickets | 8 business hours | Verified Zoho business hours. Automated acknowledgements and AI drafts do not count. |
| Reply after a customer follow-up | 12 business hours | From the relevant incoming customer message, using Zoho business hours. |
| Actual resolution of standard issues | 48 elapsed hours | Continuous clock. Closing a ticket alone does not establish resolution. |
| Actual resolution of technical issues | 5 business days | Verified Zoho calendar; record assessment and update milestones for complex cases. |
| Escalation after inability to resolve is confirmed | 2 business hours | Human-recorded confirmation and recipient; Elian initially receives and confirms the next owner. |
| Monthly attainment | ≥90% | Report each metric separately with data coverage and unknown counts. |

### Proposed first-reply targets by priority

| Priority | Situation | First human reply |
|---|---|---|
| P1 | Machine unusable or safety concern reported | 2 business hours |
| P2 | Core function impaired, affecting customer delivery | 4 business hours |
| P3 | Settings, parameters or accessory inquiry | 8 business hours |
| P4 | Feedback or general inquiry | 8 business hours |

Safety concerns require a priority human alert. A target is not a reason to wait. This Mac pilot does not provide 24/7 coverage.

### Five decisions for review

1. **Clock definitions:** business hours for first reply, follow-up and escalation; elapsed hours for standard resolution; business days for technical resolution. Verify against the Zoho calendar.
2. **Priority targets:** accept or revise P1/P2/P3/P4 at 2/4/8/8 business hours. These are proposed internal targets.
3. **Waiting / pauses:** do not calculate pauses locally. Only confirmed Zoho pause rules may apply.
4. **Ownership:** Elian initially receives alerts and confirms subsequent owners. The actual engineer is still to be assigned.
5. **Unknowns and denominator:** unknown cases are reported separately and never counted as compliant. Calculate attainment only for evaluable, due samples, with coverage and unknown counts always visible.

### Before activation

- Elian explicitly reviews this version’s targets and measurement rules.
- Verify the Zoho timezone, business days and holidays.
- Verify human-reply identity, pause rules and resolution evidence.
- Confirm escalation recipients and validate representative tickets.
- Independently read back applied settings. An instruction to continue implementation is not approval to activate new targets.

### Handling SOP / 客服处理流程

Receive & triage → check original messages and sources → human first reply → name the next step and owner → follow up or escalate → verify actual resolution → return de-identified knowledge.

接收与分诊 → 核对原文及来源 → 人工首响 → 明确下一步与负责人 → 跟进或升级 → 实际解决复核 → 脱敏知识回流。

No customer emails, ticket records, credentials or private review records are included in this document. / 本文不包含客户邮件、工单记录、凭据或私有审核记录。
