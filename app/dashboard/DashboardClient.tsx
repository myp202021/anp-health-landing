"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */
interface KPI {
  value: number;
  prev: number;
}
interface Campaign {
  name: string;
  cost: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  costPerConversion: number;
  allConversions: number;
  costPerAllConversions: number;
}
interface AdGroup {
  name: string;
  clicks: number;
  cost: number;
  impressions: number;
  conversions: number;
  topPositionPct: number;
  costPerConversion: number;
}
interface Keyword {
  keyword: string;
  clicks: number;
  cost: number;
  impressions: number;
  conversions: number;
  topPositionPct: number;
  costPerConversion: number;
  cpc: number;
  allConversions: number;
  costPerAllConversions: number;
}
interface DeviceData {
  pct: number;
  cost: number;
  clicks: number;
}
interface DailyData {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number;
  cost: number;
  cpc: number;
}
interface AccountData {
  label: string;
  kpis: Record<string, KPI>;
  campaigns: Campaign[];
  adGroups: AdGroup[];
  keywords: Keyword[];
  devices: Record<string, DeviceData>;
  daily: DailyData[];
}
interface DashboardData {
  dateRange: string;
  updatedAt: string;
  consolidated: Record<string, KPI>;
  us: AccountData;
  lat: AccountData;
}

/* ──────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────── */
const RANGES = [
  { value: "today", label: "Hoy" },
  { value: "yesterday", label: "Ayer" },
  { value: "last7", label: "Ultimos 7 dias" },
  { value: "last30", label: "Ultimos 30 dias" },
  { value: "thisMonth", label: "Este mes" },
  { value: "lastMonth", label: "Mes anterior" },
];

const RANGE_COMPARISON: Record<string, string> = {
  today: "vs. ayer",
  yesterday: "vs. dia anterior",
  last7: "vs. 7 dias previos",
  last30: "vs. 30 dias previos",
  thisMonth: "vs. mes anterior",
  lastMonth: "vs. mes previo",
};

function fmt(n: number, type: "currency" | "number" | "pct" | "decimal" = "number"): string {
  if (type === "currency") return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (type === "pct") return n.toFixed(2) + "%";
  if (type === "decimal") return n.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return n.toLocaleString("en-US");
}

function pctChange(current: number, prev: number): number {
  if (prev === 0) return current > 0 ? 100 : 0;
  return +((current - prev) / prev * 100).toFixed(1);
}

/* ──────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────── */

function ChangeBadge({ current, prev }: { current: number; prev: number }) {
  const change = pctChange(current, prev);
  const isPositive = change >= 0;
  const color = isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50";
  const arrow = isPositive ? "\u25B2" : "\u25BC";
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {arrow} {Math.abs(change)}%
    </span>
  );
}

function KPICard({ label, value, prev, format }: { label: string; value: number; prev: number; format: "currency" | "number" | "pct" | "decimal" }) {
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    let start = 0;
    const steps = 30;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(+start.toFixed(2));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="db-card p-4 flex flex-col gap-1">
      <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{label}</span>
      <span className="text-2xl font-bold text-gray-900">{fmt(displayed, format)}</span>
      <div className="flex items-center gap-2 mt-1">
        <ChangeBadge current={value} prev={prev} />
        <span className="text-xs text-gray-400">Ant: {fmt(prev, format)}</span>
      </div>
    </div>
  );
}

/* ── Sortable Table ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SortableTable({
  columns,
  data,
  id,
}: {
  columns: { key: string; label: string; format?: "currency" | "number" | "pct" | "decimal"; align?: "left" | "right" }[];
  data: any[];
  id: string;
}) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = useMemo(() => {
    if (!sortKey) return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [...data].sort((a: any, b: any) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (typeof va === "string") return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      return sortAsc ? va - vb : vb - va;
    });
  }, [data, sortKey, sortAsc]);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" id={id}>
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-3 px-3 font-semibold text-gray-600 cursor-pointer hover:text-blue-600 select-none whitespace-nowrap ${col.align === "right" ? "text-right" : "text-left"}`}
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                {sortKey === col.key && (
                  <span className="ml-1 text-blue-500">{sortAsc ? "\u25B2" : "\u25BC"}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {sorted.map((row: any, i: number) => (
            <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-blue-50/30 transition-colors`}>
              {columns.map((col) => (
                <td key={col.key} className={`py-2.5 px-3 ${col.align === "right" ? "text-right" : "text-left"} text-gray-700`}>
                  {col.format ? fmt(row[col.key] as number, col.format) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── SVG Line Chart ── */
function LineChart({
  data,
  line1Key,
  line2Key,
  line1Label,
  line2Label,
  line1Color,
  line2Color,
  line1Format,
  line2Format,
}: {
  data: DailyData[];
  line1Key: keyof DailyData;
  line2Key: keyof DailyData;
  line1Label: string;
  line2Label: string;
  line1Color: string;
  line2Color: string;
  line1Format: "currency" | "number" | "pct";
  line2Format: "currency" | "number" | "pct";
}) {
  if (data.length === 0) return <div className="h-48 flex items-center justify-center text-gray-400">Sin datos</div>;

  const W = 500;
  const H = 200;
  const PAD = 40;

  const vals1 = data.map((d) => d[line1Key] as number);
  const vals2 = data.map((d) => d[line2Key] as number);
  const max1 = Math.max(...vals1, 1);
  const max2 = Math.max(...vals2, 0.01);

  const toPath = (vals: number[], maxVal: number) => {
    const stepX = (W - PAD * 2) / Math.max(vals.length - 1, 1);
    return vals.map((v, i) => {
      const x = PAD + i * stepX;
      const y = H - PAD - ((v / maxVal) * (H - PAD * 2));
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
  };

  const xLabels = data.length <= 10
    ? data.map((d) => d.date.slice(5))
    : data.filter((_, i) => i % Math.ceil(data.length / 6) === 0 || i === data.length - 1).map((d) => d.date.slice(5));

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-2 text-xs">
        <span className="flex items-center gap-1">
          <span className="w-3 h-0.5 inline-block rounded" style={{ background: line1Color }} />
          {line1Label}
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-0.5 inline-block rounded" style={{ background: line2Color }} />
          {line2Label}
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 220 }}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
          const y = H - PAD - pct * (H - PAD * 2);
          return <line key={pct} x1={PAD} y1={y} x2={W - PAD} y2={y} stroke="#e5e7eb" strokeWidth="0.5" />;
        })}
        {/* X axis labels */}
        {xLabels.map((label, i) => {
          const x = PAD + (data.findIndex((d) => d.date.slice(5) === label) / Math.max(data.length - 1, 1)) * (W - PAD * 2);
          return (
            <text key={i} x={x} y={H - 8} textAnchor="middle" fontSize="9" fill="#9ca3af">{label}</text>
          );
        })}
        {/* Y axis labels for line1 */}
        {[0, 0.5, 1].map((pct) => {
          const y = H - PAD - pct * (H - PAD * 2);
          return (
            <text key={pct} x={PAD - 4} y={y + 3} textAnchor="end" fontSize="9" fill={line1Color}>
              {fmt(+(max1 * pct).toFixed(1), line1Format)}
            </text>
          );
        })}
        {/* Lines */}
        <path d={toPath(vals1, max1)} fill="none" stroke={line1Color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={toPath(vals2, max2)} fill="none" stroke={line2Color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 2" />
        {/* Dots */}
        {vals1.map((v, i) => {
          const stepX = (W - PAD * 2) / Math.max(vals1.length - 1, 1);
          const x = PAD + i * stepX;
          const y = H - PAD - ((v / max1) * (H - PAD * 2));
          return <circle key={i} cx={x} cy={y} r="2.5" fill={line1Color} />;
        })}
      </svg>
    </div>
  );
}

/* ── Pie Chart (SVG) ── */
function PieChart({ segments, title }: { segments: { label: string; value: number; color: string }[]; title: string }) {
  const total = segments.reduce((a, s) => a + s.value, 0);
  if (total === 0) return <div className="text-center text-gray-400 text-sm py-8">Sin datos</div>;

  let cumulative = 0;
  const paths = segments.filter((s) => s.value > 0).map((seg) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += seg.value;
    const endAngle = (cumulative / total) * 360;
    const start = polarToCartesian(100, 100, 80, startAngle);
    const end = polarToCartesian(100, 100, 80, endAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const pct = ((seg.value / total) * 100).toFixed(1);

    // If this segment is 100%, draw a circle
    if (+pct >= 99.9) {
      return { ...seg, pct, d: "", isFullCircle: true };
    }

    const d = `M 100 100 L ${start.x} ${start.y} A 80 80 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
    return { ...seg, pct, d, isFullCircle: false };
  });

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
      <svg viewBox="0 0 200 200" className="w-40 h-40">
        {paths.map((p, i) =>
          p.isFullCircle ? (
            <circle key={i} cx="100" cy="100" r="80" fill={p.color} />
          ) : (
            <path key={i} d={p.d} fill={p.color} stroke="white" strokeWidth="1" />
          )
        )}
      </svg>
      <div className="flex flex-wrap gap-3 mt-3 justify-center">
        {paths.map((p, i) => (
          <span key={i} className="flex items-center gap-1 text-xs text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: p.color }} />
            {p.label}: {p.pct}%
          </span>
        ))}
      </div>
    </div>
  );
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ── Google Ads Icon ── */
function GoogleAdsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block mr-2 -mt-0.5">
      <path d="M3.272 18.96l4.724-8.168a4.2 4.2 0 010 4.2l-2.364 4.088a2.1 2.1 0 01-3.632-.004 2.1 2.1 0 011.272-3.116z" fill="#FBBC04"/>
      <path d="M7.992 10.792L15.12 2.4a2.1 2.1 0 013.636 0l2.1 3.636a2.1 2.1 0 01-.768 2.868L8.004 10.8l-.012-.008z" fill="#4285F4"/>
      <path d="M20.856 18.96l-4.728-8.16 3.636-2.1 2.364 4.092a4.2 4.2 0 01-1.536 5.736 2.1 2.1 0 01-.736.432z" fill="#34A853"/>
      <circle cx="5.4" cy="19.2" r="2.4" fill="#EA4335"/>
    </svg>
  );
}

/* ── Account Section ── */
function AccountSection({ account, id }: { account: AccountData; id: string }) {
  const k = account.kpis;
  const kpiCards = [
    { label: "Coste", key: "cost", format: "currency" as const },
    { label: "Impresiones", key: "impressions", format: "number" as const },
    { label: "Clics", key: "clicks", format: "number" as const },
    { label: "CTR", key: "ctr", format: "pct" as const },
    { label: "CPC promedio", key: "cpc", format: "currency" as const },
    { label: "CPM medio", key: "cpm", format: "currency" as const },
    { label: "Conversiones", key: "conversions", format: "number" as const },
    { label: "Valor conversiones", key: "convValue", format: "currency" as const },
    { label: "Tasa de Conversion", key: "convRate", format: "pct" as const },
    { label: "Todas las conversiones", key: "allConversions", format: "decimal" as const },
    { label: "Valor todas", key: "allConvValue", format: "currency" as const },
    { label: "ROAS", key: "roas", format: "decimal" as const },
  ];

  const campaignCols = [
    { key: "name", label: "Campana", align: "left" as const },
    { key: "cost", label: "Coste", format: "currency" as const, align: "right" as const },
    { key: "impressions", label: "Impresiones", format: "number" as const, align: "right" as const },
    { key: "clicks", label: "Clics", format: "number" as const, align: "right" as const },
    { key: "ctr", label: "CTR", format: "pct" as const, align: "right" as const },
    { key: "cpc", label: "CPC", format: "currency" as const, align: "right" as const },
    { key: "conversions", label: "Conv.", format: "number" as const, align: "right" as const },
    { key: "costPerConversion", label: "Coste/Conv.", format: "currency" as const, align: "right" as const },
    { key: "allConversions", label: "Todas Conv.", format: "decimal" as const, align: "right" as const },
    { key: "costPerAllConversions", label: "Coste/Todas", format: "currency" as const, align: "right" as const },
  ];

  const adGroupCols = [
    { key: "name", label: "Grupo de anuncios", align: "left" as const },
    { key: "clicks", label: "Clics", format: "number" as const, align: "right" as const },
    { key: "cost", label: "Coste", format: "currency" as const, align: "right" as const },
    { key: "impressions", label: "Impresiones", format: "number" as const, align: "right" as const },
    { key: "conversions", label: "Conv.", format: "number" as const, align: "right" as const },
    { key: "topPositionPct", label: "% 1ra posicion", format: "pct" as const, align: "right" as const },
    { key: "costPerConversion", label: "Coste/Conv.", format: "currency" as const, align: "right" as const },
  ];

  const keywordCols = [
    { key: "keyword", label: "Palabra clave", align: "left" as const },
    { key: "clicks", label: "Clics", format: "number" as const, align: "right" as const },
    { key: "cost", label: "Coste", format: "currency" as const, align: "right" as const },
    { key: "impressions", label: "Impresiones", format: "number" as const, align: "right" as const },
    { key: "conversions", label: "Conv.", format: "number" as const, align: "right" as const },
    { key: "topPositionPct", label: "% 1ra pos.", format: "pct" as const, align: "right" as const },
    { key: "costPerConversion", label: "Coste/Conv.", format: "currency" as const, align: "right" as const },
    { key: "cpc", label: "CPC", format: "currency" as const, align: "right" as const },
    { key: "allConversions", label: "Todas Conv.", format: "decimal" as const, align: "right" as const },
    { key: "costPerAllConversions", label: "Coste/Todas", format: "currency" as const, align: "right" as const },
  ];

  const deviceSegments = [
    { label: "Movil", value: account.devices.mobile.pct, color: "#4285f4" },
    { label: "Desktop", value: account.devices.desktop.pct, color: "#34a853" },
    { label: "Tablet", value: account.devices.tablet.pct, color: "#fbbc04" },
  ];

  const deviceSegmentsCost = [
    { label: "Movil", value: account.devices.mobile.cost, color: "#4285f4" },
    { label: "Desktop", value: account.devices.desktop.cost, color: "#34a853" },
    { label: "Tablet", value: account.devices.tablet.cost, color: "#fbbc04" },
  ];

  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <GoogleAdsIcon />
        <h2 className="text-xl font-bold text-gray-800">{account.label}</h2>
        <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">Google Ads</span>
      </div>

      {/* KPI grid 4 cols x 3 rows */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {kpiCards.map((kpi) => (
          <KPICard
            key={kpi.key}
            label={kpi.label}
            value={k[kpi.key].value}
            prev={k[kpi.key].prev}
            format={kpi.format}
          />
        ))}
      </div>

      {/* Campaigns Table */}
      <div className="db-card p-4 mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Todas las Campanas</h3>
        <SortableTable columns={campaignCols} data={account.campaigns} id={`${id}-campaigns`} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="db-card p-4">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Clics y CTR a lo largo del tiempo</h3>
          <LineChart
            data={account.daily}
            line1Key="clicks"
            line2Key="ctr"
            line1Label="Clics"
            line2Label="CTR"
            line1Color="#4285f4"
            line2Color="#ea4335"
            line1Format="number"
            line2Format="pct"
          />
        </div>
        <div className="db-card p-4">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Coste y CPC Promedio a lo largo del tiempo</h3>
          <LineChart
            data={account.daily}
            line1Key="cost"
            line2Key="cpc"
            line1Label="Coste"
            line2Label="CPC"
            line1Color="#34a853"
            line2Color="#fbbc04"
            line1Format="currency"
            line2Format="currency"
          />
        </div>
      </div>

      {/* Ad Groups Table */}
      <div className="db-card p-4 mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Resumen Grupos de Anuncio</h3>
        <SortableTable columns={adGroupCols} data={account.adGroups} id={`${id}-adgroups`} />
      </div>

      {/* Device Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="db-card p-5">
          <PieChart segments={deviceSegmentsCost} title="Coste por Dispositivo" />
        </div>
        <div className="db-card p-5">
          <PieChart segments={deviceSegments} title="Clics por Dispositivo" />
        </div>
      </div>

      {/* Keywords Table */}
      <div className="db-card p-4">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Resumen Palabras Clave</h3>
        <SortableTable columns={keywordCols} data={account.keywords} id={`${id}-keywords`} />
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Main Dashboard
   ────────────────────────────────────────────── */
export default function DashboardClient() {
  const [range, setRange] = useState("last30");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const fetchData = useCallback(async (r: string) => {
    setTransitioning(true);
    try {
      const res = await fetch(`/api/dashboard?range=${r}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
      setTimeout(() => setTransitioning(false), 100);
    }
  }, []);

  useEffect(() => {
    fetchData(range);
  }, [range, fetchData]);

  const handleRangeChange = (newRange: string) => {
    setRange(newRange);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const c = data.consolidated;

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* ── Print styles ── */}
      <style>{`
        .db-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          transition: box-shadow 0.2s;
        }
        .db-card:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        @media print {
          .no-print { display: none !important; }
          .db-card { break-inside: avoid; box-shadow: none !important; border: 1px solid #ddd; }
          body { background: white !important; }
        }
      `}</style>

      {/* ══════════ HEADER ══════════ */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left: Logo + title */}
            <div className="flex items-center gap-4">
              <img
                src="/images/anp-logo-1.png"
                alt="ANP Health"
                className="h-10 w-auto"
              />
              <div className="h-8 w-px bg-gray-300" />
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-tight">ANP HEALTH SOLUTIONS</h1>
                <p className="text-xs text-gray-500">Dashboard de rendimiento Google Ads</p>
              </div>
              <img
                src="https://www.mulleryperez.cl/logo-color.png"
                alt="M&P"
                className="h-6 w-auto opacity-50 ml-4 hidden sm:block"
              />
            </div>

            {/* Right: Date range picker */}
            <div className="flex items-center gap-3 no-print">
              <select
                value={range}
                onChange={(e) => handleRangeChange(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none cursor-pointer"
              >
                {RANGES.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                {RANGE_COMPARISON[range]}
              </span>
              <button
                onClick={() => window.print()}
                className="text-xs text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                title="Imprimir / Exportar PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline -mt-0.5 mr-1">
                  <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z"/>
                </svg>
                PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ CONTENT ══════════ */}
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 py-8 transition-opacity duration-300 ${transitioning ? "opacity-50" : "opacity-100"}`}>
        {/* ── Section 1: Consolidated ── */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Resumen Consolidado</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <KPICard label="Gasto total" value={c.cost.value} prev={c.cost.prev} format="currency" />
            <KPICard label="Impresiones" value={c.impressions.value} prev={c.impressions.prev} format="number" />
            <KPICard label="Clics" value={c.clicks.value} prev={c.clicks.prev} format="number" />
            <KPICard label="Contaje de anuncios" value={c.adCount.value} prev={c.adCount.prev} format="number" />
          </div>
        </section>

        {/* ── Divider ── */}
        <hr className="border-gray-200 mb-10" />

        {/* ── Section 2: Google Ads US ── */}
        <AccountSection account={data.us} id="us" />

        {/* ── Divider ── */}
        <hr className="border-gray-200 mb-10" />

        {/* ── Section 3: Google Ads LAT ── */}
        <AccountSection account={data.lat} id="lat" />

        {/* ── Footer ── */}
        <footer className="mt-12 pb-8 text-center text-xs text-gray-400">
          <p>Dashboard generado por <strong>Muller y Perez</strong> &middot; Datos actualizados: {new Date(data.updatedAt).toLocaleString("es-CL")}</p>
          <p className="mt-1">Los datos provienen de la API de Google Ads. Para conectar datos reales, configure las credenciales en /api/dashboard.</p>
        </footer>
      </main>
    </div>
  );
}
