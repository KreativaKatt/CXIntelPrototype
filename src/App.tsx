import { useState } from "react"

type Screen = "dashboard" | "issues" | "billing" | "feedback" | "detail" | "edit-detail" | "report" | "edit-report"

type IconName = "home" | "issues" | "growth" | "inbox" | "search" | "bell" | "chevron" | "arrow" | "spark" | "trend" | "users" | "warning" | "check" | "minus" | "edit" | "share" | "filter" | "more" | "close" | "download" | "sun" | "moon"

const Icon = ({
  name,
  size = 18,
  strokeWidth = 1.8,
}: {
  name: IconName
  size?: number
  strokeWidth?: number
}) => {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    issues: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6M12 17h.01" />
      </>
    ),
    growth: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-8M22 19H2" />
        <path d="m4 7 5-4 6 5 6-5" />
      </>
    ),
    inbox: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M4 14h5l2 2h2l2-2h5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <path d="m15 18-6-6 6-6" />,
    spark: (
      <path d="M12 3c.5 5.5 3.5 8.5 9 9-5.5.5-8.5 3.5-9 9-.5-5.5-3.5-8.5-9-9 5.5-.5 8.5-3.5 9-9Z" />
    ),
    trend: (
      <>
        <path d="m3 17 6-6 4 4 8-9" />
        <path d="M15 6h6v6" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
        <path d="M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1" />
      </>
    ),
    warning: (
      <>
        <path d="M12 3 2.5 20h19L12 3Z" />
        <path d="M12 9v5M12 17h.01" />
      </>
    ),
    check: <path d="m4 12 5 5L20 6" />,
    minus: <path d="M5 12h14" />,
    edit: (
      <>
        <path d="m4 20 4.5-1 11-11-3.5-3.5-11 11L4 20Z" />
        <path d="m14.5 6 3.5 3.5" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
      </>
    ),
    filter: (
      <>
        <path d="M3 5h18M6 12h12M10 19h4" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    close: <path d="M5 5l14 14M19 5 5 19" />,
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5" />
        <path d="M4 19v2h16v-2" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    moon: <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  )
}

const issueData = [
  { label: "Billing", count: 482, delta: "+18%", priority: "Critical" },
  { label: "Navigation", count: 315, delta: "+7%", priority: "High" },
  { label: "Integrations", count: 248, delta: "+12%", priority: "High" },
  { label: "Mobile latency", count: 186, delta: "-3%", priority: "Moderate" },
  { label: "Site stability", count: 142, delta: "-8%", priority: "Moderate" },
]

const billingData = [
  { label: "Double charge", count: 215, delta: "+24%", priority: "Critical" },
  { label: "Refund delay", count: 188, delta: "+16%", priority: "High" },
  { label: "Invoice formatting", count: 112, delta: "+5%", priority: "High" },
  { label: "Payment failed", count: 95, delta: "-2%", priority: "Moderate" },
  {
    label: "Subscription mismatch",
    count: 72,
    delta: "+4%",
    priority: "Moderate",
  },
]

const reviews = [
  {
    id: "REV-9920-XBC",
    date: "Feb 02, 2026",
    customer: "ENT-8829-JK",
    tier: "Enterprise",
    intensity: "5/5",
    sentiment: "Churn risk",
    status: "Reviewed",
  },
  {
    id: "REV-1142-LNP",
    date: "Jan 28, 2026",
    customer: "PRO-7291-AX",
    tier: "Professional",
    intensity: "3/5",
    sentiment: "Dissatisfied",
    status: "Open",
  },
  {
    id: "REV-5682-MTY",
    date: "Jan 27, 2026",
    customer: "SMB-4401-RC",
    tier: "Basic",
    intensity: "2/5",
    sentiment: "Dissatisfied",
    status: "Open",
  },
  {
    id: "REV-7714-DRE",
    date: "Jan 20, 2026",
    customer: "SMB-3310-ZA",
    tier: "Basic",
    intensity: "1/5",
    sentiment: "Feature request",
    status: "Open",
  },
  {
    id: "REV-4409-SWS",
    date: "Jan 18, 2026",
    customer: "SMB-4201-CB",
    tier: "Basic",
    intensity: "4/5",
    sentiment: "Churn risk",
    status: "Open",
  },
  {
    id: "REV-2287-TYU",
    date: "Jan 15, 2026",
    customer: "ENT-1120-GH",
    tier: "Enterprise",
    intensity: "5/5",
    sentiment: "Support delay",
    status: "Open",
  },
]

const tags = [
  "ui_ux_design",
  "performance_speed",
  "double_charge",
  "support_latency",
  "churn_risk",
]

const Button = ({
  children,
  icon,
  kind = "primary",
  onClick,
  type = "button",
}: {
  children: React.ReactNode
  icon?: IconName
  kind?: "primary" | "secondary" | "ghost"
  onClick?: () => void
  type?: "button" | "submit"
}) => (
  <button className={`button button--${kind}`} onClick={onClick} type={type}>
    {icon && <Icon name={icon} size={16} />}
    {children}
  </button>
)

const Panel = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => (
  <section
    className={`panel ${onClick ? "panel--clickable" : ""} ${className}`}
    onClick={onClick}
  >
    {children}
  </section>
)

const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  back,
  actions,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  back?: () => void
  actions?: React.ReactNode
}) => (
  <header className="page-header">
    <div className="page-heading-row">
      <div className="page-heading">
        {back && (
          <button
            aria-label="Go back"
            className="icon-button page-back"
            onClick={back}
          >
            <Icon name="arrow" size={19} />
          </button>
        )}
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </div>
  </header>
)

const MiniBars = ({
  values,
  labels,
  onClick,
}: {
  values: number[]
  labels: string[]
  onClick?: () => void
}) => (
  <div className="bar-chart" onClick={onClick}>
    {values.map((value, index) => (
      <div className="bar-row" key={labels[index]}>
        <span>{labels[index]}</span>
        <div className="bar-track">
          <i style={{ width: `${value}%` }} />
        </div>
        <b>{Math.round((value / 100) * 482)}</b>
      </div>
    ))}
  </div>
)

const TrendChart = ({ compact = false }: { compact?: boolean }) => (
  <div className={`trend-chart ${compact ? "trend-chart--compact" : ""}`}>
    <div className="chart-grid" />
    <svg
      aria-label="Customer issue trend line chart"
      preserveAspectRatio="none"
      viewBox="0 0 500 170"
    >
      <defs>
        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2a6f70" stopOpacity=".22" />
          <stop offset="100%" stopColor="#2a6f70" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M10 145 C45 143 76 137 105 134 C145 130 170 123 202 118 C240 112 266 108 300 100 C340 91 369 76 402 61 C435 47 462 52 490 66 L490 170 L10 170 Z"
        fill="url(#trendFill)"
        stroke="none"
      />
      <path
        className="trend-line"
        d="M10 145 C45 143 76 137 105 134 C145 130 170 123 202 118 C240 112 266 108 300 100 C340 91 369 76 402 61 C435 47 462 52 490 66"
        fill="none"
        strokeWidth="4"
      />
      {[10, 105, 202, 300, 402, 490].map((x, index) => (
        <circle
          className="trend-point"
          cx={x}
          cy={[145, 134, 118, 100, 61, 66][index]}
          key={x}
          r="5"
          strokeWidth="3"
        />
      ))}
    </svg>
    <div className="chart-axis">
      <span>Sep</span>
      <span>Oct</span>
      <span>Nov</span>
      <span>Dec</span>
      <span>Jan</span>
      <span>Feb</span>
    </div>
  </div>
)

const Donut = ({
  value,
  label,
  tone = "teal",
}: {
  value: number
  label: string
  tone?: "teal" | "coral"
}) => (
  <div className="donut-wrap">
    <div
      className={`donut donut--${tone}`}
      style={{ "--value": `${value * 3.6}deg` } as React.CSSProperties}
    >
      <div>
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  </div>
)

const Dashboard = ({ go }: { go: (screen: Screen) => void }) => (
  <>
    <PageHeader
      eyebrow="Overview · February 1–28"
      title="Feedback intelligence"
      subtitle="Turn customer signals into the next highest-impact product decision."
      actions={
        <>
          <Button icon="download" kind="secondary">
            Export
          </Button>
          <Button icon="spark" onClick={() => go("issues")}>
            Explore insights
          </Button>
        </>
      }
    />

    <div className="metric-grid">
      <Panel className="metric-card">
        <div className="metric-top">
          <span>Reviews analyzed</span>
          <span className="metric-icon">
            <Icon name="inbox" size={17} />
          </span>
        </div>
        <strong>2,584</strong>
        <div className="metric-foot">
          <b>+14.2%</b> vs last month
        </div>
      </Panel>
      <Panel className="metric-card">
        <div className="metric-top">
          <span>Negative sentiment</span>
          <span className="metric-icon">
            <Icon name="trend" size={17} />
          </span>
        </div>
        <strong>42%</strong>
        <div className="metric-foot metric-foot--bad">
          <b>+8.7%</b> needs attention
        </div>
      </Panel>
      <Panel className="metric-card">
        <div className="metric-top">
          <span>Critical themes</span>
          <span className="metric-icon">
            <Icon name="warning" size={17} />
          </span>
        </div>
        <strong>3</strong>
        <div className="metric-foot">
          <b>Billing</b> is highest impact
        </div>
      </Panel>
      <Panel className="metric-card">
        <div className="metric-top">
          <span>Customer reach</span>
          <span className="metric-icon">
            <Icon name="users" size={17} />
          </span>
        </div>
        <strong>18.4k</strong>
        <div className="metric-foot">
          <b>67%</b> enterprise accounts
        </div>
      </Panel>
    </div>

    <div className="dashboard-grid">
      <Panel className="trend-panel">
        <div className="panel-heading">
          <div>
            <span className="panel-kicker">Issue velocity</span>
            <h2>Customer friction is accelerating</h2>
          </div>
          <span className="status-chip status-chip--alert">
            +31% in 30 days
          </span>
        </div>
        <TrendChart />
      </Panel>
      <Panel className="ai-panel">
        <div className="ai-orb">
          <Icon name="spark" size={22} />
        </div>
        <span className="panel-kicker">AI signal</span>
        <h2>Billing friction is now a churn risk</h2>
        <p>
          Enterprise customers mention duplicate charges 2.4× more often this
          month. An estimated $45k MRR is exposed.
        </p>
        <Button kind="secondary" onClick={() => go("issues")}>
          Investigate signal <Icon name="chevron" size={15} />
        </Button>
      </Panel>
      <Panel className="issues-panel">
        <div className="panel-heading">
          <div>
            <span className="panel-kicker">Top negative themes</span>
            <h2>482 billing mentions</h2>
          </div>
          <button className="text-button" onClick={() => go("issues")}>
            View all <Icon name="chevron" size={14} />
          </button>
        </div>
        <MiniBars
          labels={[
            "Billing",
            "Navigation",
            "Integrations",
            "Mobile",
            "Stability",
          ]}
          onClick={() => go("issues")}
          values={[100, 65, 51, 39, 29]}
        />
      </Panel>
      <Panel className="sentiment-panel">
        <div className="panel-heading">
          <div>
            <span className="panel-kicker">Sentiment mix</span>
            <h2>Across all feedback</h2>
          </div>
        </div>
        <div className="donut-pair">
          <Donut label="negative" tone="coral" value={42} />
          <Donut label="positive" value={12} />
        </div>
        <div className="sentiment-note">
          <span>
            <i className="legend-dot legend-dot--coral" /> Negative
          </span>
          <span>
            <i className="legend-dot legend-dot--teal" /> Positive
          </span>
        </div>
      </Panel>
    </div>
  </>
)

const ThemeExplorer = ({
  go,
  mode,
}: {
  go: (screen: Screen) => void
  mode: "issues" | "billing"
}) => {
  const isBilling = mode === "billing"
  const data = isBilling ? billingData : issueData
  const max = Math.max(...data.map((item) => item.count))

  return (
    <>
      <PageHeader
        back={() => go(isBilling ? "issues" : "dashboard")}
        eyebrow={isBilling ? "Analysis level 3 of 3" : "Analysis level 1 of 3"}
        title={isBilling ? "Billing root causes" : "Trending customer issues"}
        subtitle={
          isBilling
            ? "Understand why billing friction is increasing across 482 customer mentions."
            : "Start with high-impact themes across 2,584 reviews, then drill into a category."
        }
      />
      <div className="analysis-steps" aria-label="Issue analysis hierarchy">
        <button
          className={!isBilling ? "active" : "complete"}
          onClick={() => go("issues")}
        >
          <span>1</span>
          <div>
            <b>Trending issues</b>
            <small>Compare categories</small>
          </div>
        </button>
        <Icon name="chevron" size={15} />
        <button
          className={isBilling ? "complete" : ""}
          disabled={!isBilling}
          onClick={() => go("billing")}
        >
          <span>2</span>
          <div>
            <b>{isBilling ? "Billing" : "Select a category"}</b>
            <small>Focus the analysis</small>
          </div>
        </button>
        <Icon name="chevron" size={15} />
        <button className={isBilling ? "active" : ""} disabled={!isBilling}>
          <span>3</span>
          <div>
            <b>Root causes</b>
            <small>Review contributing themes</small>
          </div>
        </button>
      </div>
      <div className="explorer-layout">
        <Panel className="ranking-panel">
          <div className="panel-heading">
            <div>
              <span className="panel-kicker">
                {isBilling ? "Root causes" : "Category volume"}
              </span>
              <h2>Mentions by theme</h2>
            </div>
            <span className="confidence">
              <Icon name="spark" size={13} /> 94% confidence
            </span>
          </div>
          <div className="rank-chart">
            {data.map((item, index) => (
              <button
                className={`rank-row ${index === 0 ? "rank-row--active" : ""}`}
                key={item.label}
                onClick={() => go(isBilling ? "feedback" : "billing")}
              >
                <span className="rank-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rank-label">{item.label}</span>
                <span className="rank-bar">
                  <i style={{ width: `${(item.count / max) * 100}%` }} />
                </span>
                <strong>{item.count}</strong>
                <span
                  className={
                    item.delta.startsWith("+") ? "delta delta--up" : "delta"
                  }
                >
                  {item.delta}
                </span>
              </button>
            ))}
          </div>
        </Panel>
        <div className="explorer-side">
          <Panel className="impact-card">
            <span className="panel-kicker">Business impact</span>
            <div className="impact-value">$45k</div>
            <p>
              monthly recurring revenue at risk across 28 enterprise accounts
            </p>
            <div className="impact-meter">
              <i />
            </div>
            <div className="impact-labels">
              <span>Low</span>
              <span>Exposure</span>
              <b>High</b>
            </div>
          </Panel>
          <Panel className="insight-card">
            <div className="ai-orb ai-orb--small">
              <Icon name="spark" size={17} />
            </div>
            <span className="panel-kicker">Pattern detected</span>
            <h3>
              {isBilling ? "Double charge" : "Billing"} mentions are surging
            </h3>
            <p>
              {isBilling
                ? "46% of critical billing feedback mentions duplicate charges after seat expansion."
                : "Billing complaints increased after the January seat-expansion release."}
            </p>
          </Panel>
        </div>
      </div>
      <Panel className="theme-list">
        <div className="theme-list-head">
          <div>
            <span className="panel-kicker">Prioritized by impact</span>
            <h2>
              {isBilling ? "Billing root causes" : "Customer issue categories"}
            </h2>
          </div>
          <span className="muted-note">
            Select a theme to review customer evidence
          </span>
        </div>
        <div className="theme-cards">
          {data.slice(0, 4).map((item, index) => (
            <button
              className={`theme-card ${
                index === 0 ? "theme-card--primary" : ""
              }`}
              key={item.label}
              onClick={() => go(isBilling ? "feedback" : "billing")}
            >
              <div>
                <span className="priority">{item.priority} priority</span>
                <h3>{item.label}</h3>
                <p>{item.count} customer mentions</p>
              </div>
              <div className="theme-card-foot">
                <span>{item.delta} this month</span>
                <span className="round-arrow">
                  <Icon name="chevron" size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Panel>
    </>
  )
}

const FeedbackTable = ({ go }: { go: (screen: Screen) => void }) => (
  <>
    <PageHeader
      back={() => go("billing")}
      eyebrow="Issues / Billing / Double charge"
      title="Customer evidence"
      subtitle="215 reviews connected to this root cause."
      actions={
        <Button icon="spark" onClick={() => go("report")}>
          Generate report
        </Button>
      }
    />
    <div className="table-toolbar">
      <div className="search-box">
        <Icon name="search" size={17} />
        <input
          aria-label="Search feedback"
          placeholder="Search feedback or customer ID"
        />
      </div>
      <div className="toolbar-actions">
        <Button icon="filter" kind="secondary">
          Filters · 2
        </Button>
        <Button kind="secondary">
          All statuses <Icon name="chevron" size={14} />
        </Button>
      </div>
    </div>
    <Panel className="table-panel">
      <div className="table-summary">
        <div>
          <b>215</b>
          <span>total reviews</span>
        </div>
        <div>
          <b>68%</b>
          <span>enterprise</span>
        </div>
        <div>
          <b>4.2</b>
          <span>avg. intensity</span>
        </div>
        <div>
          <b>31</b>
          <span>churn risks</span>
        </div>
      </div>
      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Feedback ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Tier</th>
              <th>Intensity</th>
              <th>Sentiment</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review.id} onClick={() => go("detail")}>
                <td>
                  <button className="table-link">{review.id}</button>
                </td>
                <td>{review.date}</td>
                <td>{review.customer}</td>
                <td>
                  <span className={`tier tier--${review.tier.toLowerCase()}`}>
                    {review.tier}
                  </span>
                </td>
                <td>
                  <span
                    className={`intensity intensity--${review.intensity[0]}`}
                  >
                    {review.intensity}
                  </span>
                </td>
                <td
                  className={
                    review.sentiment === "Churn risk" ? "risk-text" : ""
                  }
                >
                  {review.sentiment}
                </td>
                <td>
                  {index === 0 ? (
                    <span className="reviewed">
                      <Icon name="check" size={13} /> Reviewed
                    </span>
                  ) : (
                    <span className="open">Open</span>
                  )}
                </td>
                <td>
                  <Icon name="chevron" size={15} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>Showing 1–6 of 215</span>
        <div>
          <button disabled>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </Panel>
  </>
)

const ReviewText = () => (
  <p className="review-copy">
    “I’ll start by saying the new{" "}
    <mark
      aria-label="Positive product experience tag"
      className="flagged-phrase"
      data-tag="positive_product_experience"
      tabIndex={0}
      title="positive_product_experience"
    >
      dashboard UI is fantastic
    </mark>
    —it’s much faster than the previous version and my team loves the new
    reporting layout. However, I am{" "}
    <em
      aria-label="Billing process tag"
      className="flagged-phrase"
      data-tag="billing_process"
      tabIndex={0}
      title="billing_process"
    >
      incredibly frustrated with the billing process
    </em>
    . We were{" "}
    <em
      aria-label="Double charge tag"
      className="flagged-phrase"
      data-tag="double_charge"
      tabIndex={0}
      title="double_charge"
    >
      double-charged
    </em>{" "}
    for our January seat expansion, and despite three emails to support, I’ve
    only received{" "}
    <em
      aria-label="Support latency tag"
      className="flagged-phrase"
      data-tag="support_latency"
      tabIndex={0}
      title="support_latency"
    >
      automated replies
    </em>{" "}
    saying they are ‘looking into it.’ We love the tool’s performance, but this
    lack of human support on a financial error is making us{" "}
    <em
      aria-label="Churn risk tag"
      className="flagged-phrase"
      data-tag="churn_risk"
      tabIndex={0}
      title="churn_risk"
    >
      reconsider our renewal
    </em>{" "}
    for next quarter.”
  </p>
)

const Detail = ({
  go,
  editing,
  setToast,
}: {
  go: (screen: Screen) => void
  editing: boolean
  setToast: (message: string) => void
}) => (
  <>
    <PageHeader
      back={() => go("feedback")}
      eyebrow="Issues / Billing / Double charge / REV-9920-XBC"
      title="Customer feedback detail"
      subtitle={
        editing
          ? "Review and correct AI-generated classifications."
          : "AI-enriched customer context and risk analysis."
      }
      actions={
        editing ? (
          <>
            <Button kind="ghost" onClick={() => go("detail")}>
              Cancel
            </Button>
            <Button
              icon="check"
              onClick={() => {
                go("detail")
                setToast("Changes saved")
              }}
            >
              Save changes
            </Button>
          </>
        ) : (
          <>
            <Button
              icon="edit"
              kind="secondary"
              onClick={() => go("edit-detail")}
            >
              Edit tags
            </Button>
            <Button
              icon="check"
              onClick={() => setToast("Review marked as complete")}
            >
              Mark reviewed
            </Button>
          </>
        )
      }
    />
    <div className="detail-grid">
      <Panel className="review-panel">
        <div className="review-meta">
          <span>Extended review</span>
          <span>Submitted Feb 2, 2026</span>
        </div>
        <ReviewText />
        <div className="quote-source">
          <span className="avatar avatar--dark">JS</span>
          <div>
            <b>Jordan Smith</b>
            <span>Product Operations · Northstar Labs</span>
          </div>
        </div>
      </Panel>
      <Panel className="risk-panel">
        <div className="risk-heading">
          <div className="risk-icon">
            <Icon name="warning" size={20} />
          </div>
          <div>
            <span>Calculated intensity</span>
            <strong>{editing ? "4.5" : "5.0"}/5</strong>
          </div>
          <span className="status-chip status-chip--danger">
            High churn risk
          </span>
        </div>
        {editing && (
          <input
            aria-label="Intensity score"
            className="range"
            defaultValue="90"
            type="range"
          />
        )}
        <h3>
          <Icon name="spark" size={16} /> AI reasoning
        </h3>
        <p>
          High-contrast sentiment detected. Positive product affinity is
          overshadowed by critical service friction. The severity score is
          weighted heavily due to explicit churn threat and the customer’s
          Enterprise status.
        </p>
        <div className="confidence-line">
          <span>Model confidence</span>
          <b>96%</b>
        </div>
      </Panel>
      <Panel className="tag-panel">
        <div className="panel-heading">
          <div>
            <span className="panel-kicker">Classification</span>
            <h2>Tags and categories</h2>
          </div>
          {editing && (
            <span className="editing-label">
              <Icon name="edit" size={13} /> Editing
            </span>
          )}
        </div>
        <div className="tag-table">
          <div className="tag-table-head">
            <span>Tag</span>
            <span>Category</span>
          </div>
          {tags.map((tag, index) => (
            <div className="tag-line" key={tag}>
              {editing && (
                <button aria-label={`Remove ${tag}`}>
                  <Icon name="close" size={12} />
                </button>
              )}
              <span className={index < 2 ? "tag-good" : "tag-bad"}>
                <i aria-hidden="true">
                  <Icon
                    name={index < 2 ? "check" : "minus"}
                    size={11}
                    strokeWidth={2.4}
                  />
                </i>
                {tag}
              </span>
              <span>
                {["Product", "Product", "Billing", "Support", "Account"][index]}
              </span>
            </div>
          ))}
        </div>
        {editing && <button className="add-tag">+ Add classification</button>}
      </Panel>
      <Panel className="profile-panel">
        <span className="panel-kicker">Customer profile</span>
        <div className="profile-head">
          <span className="avatar">NL</span>
          <div>
            <h3>Northstar Labs</h3>
            <span>Enterprise account</span>
          </div>
        </div>
        <dl>
          <div>
            <dt>Customer ID</dt>
            <dd>ENT-8829-JK</dd>
          </div>
          <div>
            <dt>ARR</dt>
            <dd>$84,000</dd>
          </div>
          <div>
            <dt>Account age</dt>
            <dd>3.2 years</dd>
          </div>
          <div>
            <dt>Renewal</dt>
            <dd>Apr 30, 2026</dd>
          </div>
        </dl>
      </Panel>
    </div>
  </>
)

const Report = ({
  go,
  editing,
  openShare,
  setToast,
}: {
  go: (screen: Screen) => void
  editing: boolean
  openShare: () => void
  setToast: (message: string) => void
}) => (
  <>
    <PageHeader
      back={() => go("feedback")}
      eyebrow="AI strategy report · Generated moments ago"
      title="Billing friction & churn mitigation"
      subtitle="A decision-ready synthesis of 215 customer reviews."
      actions={
        editing ? (
          <>
            <Button kind="ghost" onClick={() => go("report")}>
              Cancel
            </Button>
            <Button
              icon="check"
              onClick={() => {
                go("report")
                setToast("Report updates saved")
              }}
            >
              Save report
            </Button>
          </>
        ) : (
          <>
            <Button
              icon="edit"
              kind="secondary"
              onClick={() => go("edit-report")}
            >
              Edit
            </Button>
            <Button icon="share" onClick={openShare}>
              Share report
            </Button>
          </>
        )
      }
    />
    <div className="report-banner">
      <div className="ai-orb ai-orb--small">
        <Icon name="spark" size={17} />
      </div>
      <div>
        <b>AI-generated, human-controlled</b>
        <span>Every insight links back to verified customer evidence.</span>
      </div>
      <span className="confidence">
        <Icon name="check" size={13} /> 92% confidence
      </span>
    </div>
    <div className={`report-layout ${editing ? "report-layout--editing" : ""}`}>
      <Panel className="report-summary editable-section">
        <div className="section-label">
          <span>01</span> Executive summary{" "}
          {editing && <Icon name="edit" size={15} />}
        </div>
        {editing ? (
          <textarea defaultValue="A significant 31% spike in negative sentiment has been identified within the Billing category over the last 30 days. The primary driver is a technical latency in refund processing, compounded by automated support loops. This disproportionately affects Enterprise-tier users, representing a potential $45k MRR churn risk if not addressed in the upcoming sprint." />
        ) : (
          <p>
            A significant <strong>31% spike in negative sentiment</strong> has
            been identified within the Billing category over the last 30 days.
            The primary driver is technical latency in refund processing,
            compounded by automated support loops. This disproportionately
            affects Enterprise-tier users, representing a potential{" "}
            <strong>$45k MRR churn risk</strong> if not addressed in the
            upcoming sprint.
          </p>
        )}
        <div className="report-callout">
          <Icon name="warning" size={16} />
          <span>
            <b>Decision point:</b> Prioritize billing reliability before the
            April renewal window.
          </span>
        </div>
      </Panel>
      <Panel className="report-actions editable-section">
        <div className="section-label">
          <span>02</span> Proposed actions{" "}
          {editing && <Icon name="edit" size={15} />}
        </div>
        <ol className="action-list">
          <li>
            <span>1</span>
            <div>
              <b>Technical audit</b>
              <p>
                Audit the billing webhook-v2 for latency issues during seat
                expansion events.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <b>Human-touch recovery</b>
              <p>
                Deploy a direct escalation sequence for enterprise customers
                with billing tags.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <b>Close the loop</b>
              <p>
                Update the refund status FAQ with a real-time progress tracker.
              </p>
            </div>
          </li>
        </ol>
      </Panel>
      <Panel className="report-chart editable-section">
        <div className="section-label">
          <span>03</span> Billing sentiment trend{" "}
          {editing && <Icon name="edit" size={15} />}
        </div>
        <TrendChart compact />
        <p className="chart-caption">
          Negative mentions peaked after the January 18 seat-expansion release.
        </p>
      </Panel>
      <Panel className="report-tags editable-section">
        <div className="section-label">
          <span>04</span> Top reported tags{" "}
          {editing && <Icon name="edit" size={15} />}
        </div>
        <MiniBars
          labels={[
            "double_charge",
            "refund_delay",
            "support_latency",
            "invoice_error",
          ]}
          values={[100, 82, 57, 38]}
        />
      </Panel>
      <Panel className="report-team editable-section">
        <div className="section-label">
          <span>05</span> Suggested assignments{" "}
          {editing && <Icon name="edit" size={15} />}
        </div>
        <div className="assignment">
          <span className="avatar avatar--teal">DO</span>
          <div>
            <b>Devon Taylor</b>
            <span>Engineering · Priority P0</span>
          </div>
          <span>Technical audit</span>
        </div>
        <div className="assignment">
          <span className="avatar avatar--coral">SC</span>
          <div>
            <b>Success Leads</b>
            <span>Customer Success · Priority P1</span>
          </div>
          <span>Recovery sequence</span>
        </div>
      </Panel>
    </div>
  </>
)

const ShareModal = ({
  close,
  setToast,
}: {
  close: () => void
  setToast: (message: string) => void
}) => (
  <div className="modal-backdrop" onMouseDown={close}>
    <div
      aria-modal="true"
      className="share-modal"
      onMouseDown={(event) => event.stopPropagation()}
      role="dialog"
    >
      <div className="modal-head">
        <div>
          <span className="panel-kicker">Collaborate</span>
          <h2>Share strategy report</h2>
        </div>
        <button
          aria-label="Close dialog"
          className="icon-button"
          onClick={close}
        >
          <Icon name="close" size={19} />
        </button>
      </div>
      <p>
        Invite teammates to review insights and align on the proposed actions.
      </p>
      <label className="invite-field">
        <span>People, teams, or email</span>
        <div>
          <input autoFocus placeholder="name@company.com" />
          <Button onClick={() => setToast("Invitation sent")}>Invite</Button>
        </div>
      </label>
      <div className="suggestions">
        <span>Suggested</span>
        <button>
          <span className="avatar avatar--teal">EN</span>Engineering
        </button>
        <button>
          <span className="avatar avatar--coral">CS</span>Customer Success
        </button>
      </div>
      <div className="access-list">
        <h3>People with access</h3>
        <div>
          <span className="avatar avatar--dark">OS</span>
          <div>
            <b>Olivia Stone</b>
            <span>Product manager · You</span>
          </div>
          <span>Owner</span>
        </div>
      </div>
      <div className="modal-footer">
        <Button
          kind="secondary"
          onClick={() => {
            setToast("Share link copied")
            close()
          }}
        >
          Copy link
        </Button>
        <Button onClick={close}>Done</Button>
      </div>
    </div>
  </div>
)

const Sidebar = ({
  screen,
  go,
  collapsed,
  setCollapsed,
}: {
  screen: Screen
  go: (screen: Screen) => void
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}) => {
  const active = screen === "dashboard" ? "home" : "issues"
  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>
      <div className="brand">
        <span className="brand-mark">CX</span>
        <div>
          <b>CX Intel</b>
          <span>Product intelligence</span>
        </div>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Icon name="arrow" size={15} />
        </button>
      </div>
      <nav>
        <span className="nav-label">Workspace</span>
        <button
          className={active === "home" ? "active" : ""}
          onClick={() => go("dashboard")}
        >
          <Icon name="home" />
          <span>Home</span>
        </button>
        <button
          className={active === "issues" ? "active" : ""}
          onClick={() => go("issues")}
        >
          <Icon name="issues" />
          <span>Issues</span>
          <i>3</i>
        </button>
        <button onClick={() => go("dashboard")}>
          <Icon name="growth" />
          <span>Growth</span>
        </button>
        <button onClick={() => go("dashboard")}>
          <Icon name="inbox" />
          <span>Inbox</span>
          <i>8</i>
        </button>
      </nav>
      <div className="sidebar-bottom">
        <div className="workspace">
          <span className="workspace-logo">NS</span>
          <div>
            <b>Northstar Labs</b>
            <span>Enterprise workspace</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("dashboard")
  const [shareOpen, setShareOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [toast, setToast] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  const go = (next: Screen) => {
    setScreen(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 2600)
  }

  return (
    <div className="app-shell" data-theme={theme}>
      <Sidebar
        collapsed={collapsed}
        go={go}
        screen={screen}
        setCollapsed={setCollapsed}
      />
      <div className="app-body">
        <header className="topbar">
          <div className="mobile-brand">
            <span className="brand-mark">CX</span>
            <b>CX Intel</b>
          </div>
          <div className="topbar-tools">
            <button
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
            <button aria-label="Search" className="icon-button">
              <Icon name="search" />
            </button>
            <button
              aria-label="Notifications"
              className="icon-button notification"
            >
              <Icon name="bell" />
              <i />
            </button>
            <div className="user-chip">
              <span className="avatar">OS</span>
              <div>
                <b>Olivia</b>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
        </header>
        <main>
          {screen === "dashboard" && <Dashboard go={go} />}
          {screen === "issues" && <ThemeExplorer go={go} mode="issues" />}
          {screen === "billing" && <ThemeExplorer go={go} mode="billing" />}
          {screen === "feedback" && <FeedbackTable go={go} />}
          {(screen === "detail" || screen === "edit-detail") && (
            <Detail
              editing={screen === "edit-detail"}
              go={go}
              setToast={notify}
            />
          )}
          {(screen === "report" || screen === "edit-report") && (
            <Report
              editing={screen === "edit-report"}
              go={go}
              openShare={() => setShareOpen(true)}
              setToast={notify}
            />
          )}
        </main>
      </div>
      {shareOpen && (
        <ShareModal close={() => setShareOpen(false)} setToast={notify} />
      )}
      {toast && (
        <div className="toast">
          <Icon name="check" size={16} />
          {toast}
        </div>
      )}
    </div>
  )
}
