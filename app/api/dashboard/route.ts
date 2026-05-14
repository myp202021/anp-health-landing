import { NextRequest, NextResponse } from "next/server";

// Mock data generator — later replace with real Google Ads API calls
function generateMockData(range: string) {
  // Multiplier to simulate different date ranges
  const multipliers: Record<string, number> = {
    today: 0.04,
    yesterday: 0.04,
    last7: 0.25,
    last30: 1,
    thisMonth: 0.4,
    lastMonth: 1,
  };
  const m = multipliers[range] || 1;

  // Variation for comparison period
  const variation = () => 0.85 + Math.random() * 0.3; // 85%-115%

  // ─── US Account ───
  const usCost = +(11.17 * m).toFixed(2);
  const usImpressions = Math.round(430 * m);
  const usClicks = Math.round(18 * m);
  const usCTR = usImpressions > 0 ? +((usClicks / usImpressions) * 100).toFixed(2) : 0;
  const usCPC = usClicks > 0 ? +(usCost / usClicks).toFixed(2) : 0;
  const usCPM = usImpressions > 0 ? +((usCost / usImpressions) * 1000).toFixed(2) : 0;
  const usConversions = Math.round(3 * m);
  const usConvValue = +(usConversions * 45).toFixed(2);
  const usConvRate = usClicks > 0 ? +((usConversions / usClicks) * 100).toFixed(2) : 0;
  const usAllConv = +(usConversions * 1.2).toFixed(1);
  const usAllConvValue = +(usConvValue * 1.2).toFixed(2);
  const usROAS = usCost > 0 ? +(usConvValue / usCost).toFixed(2) : 0;

  const usPrevCost = +(usCost * variation()).toFixed(2);
  const usPrevImpressions = Math.round(usImpressions * variation());
  const usPrevClicks = Math.round(usClicks * variation());
  const usPrevCTR = usPrevImpressions > 0 ? +((usPrevClicks / usPrevImpressions) * 100).toFixed(2) : 0;
  const usPrevCPC = usPrevClicks > 0 ? +(usPrevCost / usPrevClicks).toFixed(2) : 0;
  const usPrevCPM = usPrevImpressions > 0 ? +((usPrevCost / usPrevImpressions) * 1000).toFixed(2) : 0;
  const usPrevConversions = Math.round(usConversions * variation());
  const usPrevConvValue = +(usPrevConversions * 45).toFixed(2);
  const usPrevConvRate = usPrevClicks > 0 ? +((usPrevConversions / usPrevClicks) * 100).toFixed(2) : 0;
  const usPrevAllConv = +(usPrevConversions * 1.2).toFixed(1);
  const usPrevAllConvValue = +(usPrevConvValue * 1.2).toFixed(2);
  const usPrevROAS = usPrevCost > 0 ? +(usPrevConvValue / usPrevCost).toFixed(2) : 0;

  // ─── LAT Account ───
  const latCost = +(59.87 * m).toFixed(2);
  const latImpressions = Math.round(36 * m);
  const latClicks = Math.round(6 * m);
  const latCTR = latImpressions > 0 ? +((latClicks / latImpressions) * 100).toFixed(2) : 0;
  const latCPC = latClicks > 0 ? +(latCost / latClicks).toFixed(2) : 0;
  const latCPM = latImpressions > 0 ? +((latCost / latImpressions) * 1000).toFixed(2) : 0;
  const latConversions = Math.round(1 * m);
  const latConvValue = +(latConversions * 60).toFixed(2);
  const latConvRate = latClicks > 0 ? +((latConversions / latClicks) * 100).toFixed(2) : 0;
  const latAllConv = +(latConversions * 1.1).toFixed(1);
  const latAllConvValue = +(latConvValue * 1.1).toFixed(2);
  const latROAS = latCost > 0 ? +(latConvValue / latCost).toFixed(2) : 0;

  const latPrevCost = +(latCost * variation()).toFixed(2);
  const latPrevImpressions = Math.round(latImpressions * variation());
  const latPrevClicks = Math.round(latClicks * variation());
  const latPrevCTR = latPrevImpressions > 0 ? +((latPrevClicks / latPrevImpressions) * 100).toFixed(2) : 0;
  const latPrevCPC = latPrevClicks > 0 ? +(latPrevCost / latPrevClicks).toFixed(2) : 0;
  const latPrevCPM = latPrevImpressions > 0 ? +((latPrevCost / latPrevImpressions) * 1000).toFixed(2) : 0;
  const latPrevConversions = Math.round(latConversions * variation());
  const latPrevConvValue = +(latPrevConversions * 60).toFixed(2);
  const latPrevConvRate = latPrevClicks > 0 ? +((latPrevConversions / latPrevClicks) * 100).toFixed(2) : 0;
  const latPrevAllConv = +(latPrevConversions * 1.1).toFixed(1);
  const latPrevAllConvValue = +(latPrevConvValue * 1.1).toFixed(2);
  const latPrevROAS = latPrevCost > 0 ? +(latPrevConvValue / latPrevCost).toFixed(2) : 0;

  // Daily data for charts (last 30 days or scaled)
  const days = range === "today" || range === "yesterday" ? 1 : range === "last7" ? 7 : range === "thisMonth" ? 12 : 30;
  const usDaily = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    const dayClicks = Math.round(0.5 + Math.random() * 1.5);
    const dayImpressions = Math.round(10 + Math.random() * 20);
    const dayCost = +(0.2 + Math.random() * 0.6).toFixed(2);
    return {
      date: date.toISOString().split("T")[0],
      clicks: dayClicks,
      impressions: dayImpressions,
      ctr: dayImpressions > 0 ? +((dayClicks / dayImpressions) * 100).toFixed(2) : 0,
      cost: dayCost,
      cpc: dayClicks > 0 ? +(dayCost / dayClicks).toFixed(2) : 0,
    };
  });

  const latDaily = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    const dayClicks = Math.round(Math.random() * 1);
    const dayImpressions = Math.round(1 + Math.random() * 3);
    const dayCost = +(1 + Math.random() * 3).toFixed(2);
    return {
      date: date.toISOString().split("T")[0],
      clicks: dayClicks,
      impressions: dayImpressions,
      ctr: dayImpressions > 0 ? +((dayClicks / dayImpressions) * 100).toFixed(2) : 0,
      cost: dayCost,
      cpc: dayClicks > 0 ? +(dayCost / dayClicks).toFixed(2) : 0,
    };
  });

  return {
    dateRange: range,
    updatedAt: new Date().toISOString(),
    consolidated: {
      cost: { value: +(usCost + latCost).toFixed(2), prev: +(usPrevCost + latPrevCost).toFixed(2) },
      impressions: { value: usImpressions + latImpressions, prev: usPrevImpressions + latPrevImpressions },
      clicks: { value: usClicks + latClicks, prev: usPrevClicks + latPrevClicks },
      adCount: { value: 8, prev: 8 },
    },
    us: {
      label: "ANP Health - US",
      kpis: {
        cost: { value: usCost, prev: usPrevCost },
        impressions: { value: usImpressions, prev: usPrevImpressions },
        clicks: { value: usClicks, prev: usPrevClicks },
        ctr: { value: usCTR, prev: usPrevCTR },
        cpc: { value: usCPC, prev: usPrevCPC },
        cpm: { value: usCPM, prev: usPrevCPM },
        conversions: { value: usConversions, prev: usPrevConversions },
        convValue: { value: usConvValue, prev: usPrevConvValue },
        convRate: { value: usConvRate, prev: usPrevConvRate },
        allConversions: { value: usAllConv, prev: usPrevAllConv },
        allConvValue: { value: usAllConvValue, prev: usPrevAllConvValue },
        roas: { value: usROAS, prev: usPrevROAS },
      },
      campaigns: [
        {
          name: "USA SEARCH (EN)",
          cost: usCost,
          impressions: usImpressions,
          clicks: usClicks,
          ctr: usCTR,
          cpc: usCPC,
          conversions: usConversions,
          costPerConversion: usConversions > 0 ? +(usCost / usConversions).toFixed(2) : 0,
          allConversions: usAllConv,
          costPerAllConversions: usAllConv > 0 ? +(usCost / usAllConv).toFixed(2) : 0,
        },
      ],
      adGroups: [
        {
          name: "How to Work as Nurse in USA",
          clicks: Math.round(usClicks * 0.45),
          cost: +(usCost * 0.45).toFixed(2),
          impressions: Math.round(usImpressions * 0.4),
          conversions: Math.round(usConversions * 0.5),
          topPositionPct: 78.5,
          costPerConversion: usConversions > 0 ? +(usCost * 0.45 / Math.max(1, Math.round(usConversions * 0.5))).toFixed(2) : 0,
        },
        {
          name: "Nursing License Homologation USA",
          clicks: Math.round(usClicks * 0.35),
          cost: +(usCost * 0.35).toFixed(2),
          impressions: Math.round(usImpressions * 0.35),
          conversions: Math.round(usConversions * 0.3),
          topPositionPct: 65.2,
          costPerConversion: usConversions > 0 ? +(usCost * 0.35 / Math.max(1, Math.round(usConversions * 0.3))).toFixed(2) : 0,
        },
        {
          name: "Homologar Titulo Enfermeria EEUU",
          clicks: Math.round(usClicks * 0.2),
          cost: +(usCost * 0.2).toFixed(2),
          impressions: Math.round(usImpressions * 0.25),
          conversions: Math.round(usConversions * 0.2),
          topPositionPct: 52.1,
          costPerConversion: usConversions > 0 ? +(usCost * 0.2 / Math.max(1, Math.round(usConversions * 0.2))).toFixed(2) : 0,
        },
      ],
      keywords: [
        { keyword: "how to work as nurse in usa", clicks: Math.round(usClicks * 0.22), cost: +(usCost * 0.22).toFixed(2), impressions: Math.round(usImpressions * 0.2), conversions: Math.round(usConversions * 0.25), topPositionPct: 82.0, costPerConversion: 0, cpc: +(usCPC * 0.9).toFixed(2), allConversions: +(usAllConv * 0.25).toFixed(1), costPerAllConversions: 0 },
        { keyword: "trabajar como enfermera en estados unidos", clicks: Math.round(usClicks * 0.2), cost: +(usCost * 0.2).toFixed(2), impressions: Math.round(usImpressions * 0.18), conversions: Math.round(usConversions * 0.2), topPositionPct: 75.3, costPerConversion: 0, cpc: +(usCPC * 1.05).toFixed(2), allConversions: +(usAllConv * 0.2).toFixed(1), costPerAllConversions: 0 },
        { keyword: "pass nclex rn", clicks: Math.round(usClicks * 0.2), cost: +(usCost * 0.2).toFixed(2), impressions: Math.round(usImpressions * 0.22), conversions: Math.round(usConversions * 0.2), topPositionPct: 70.1, costPerConversion: 0, cpc: +(usCPC * 0.85).toFixed(2), allConversions: +(usAllConv * 0.2).toFixed(1), costPerAllConversions: 0 },
        { keyword: "nclex preparation usa", clicks: Math.round(usClicks * 0.2), cost: +(usCost * 0.2).toFixed(2), impressions: Math.round(usImpressions * 0.2), conversions: Math.round(usConversions * 0.2), topPositionPct: 68.7, costPerConversion: 0, cpc: +(usCPC * 1.1).toFixed(2), allConversions: +(usAllConv * 0.2).toFixed(1), costPerAllConversions: 0 },
        { keyword: "nclex for foreign nurses", clicks: Math.round(usClicks * 0.18), cost: +(usCost * 0.18).toFixed(2), impressions: Math.round(usImpressions * 0.2), conversions: Math.round(usConversions * 0.15), topPositionPct: 60.4, costPerConversion: 0, cpc: +(usCPC * 0.95).toFixed(2), allConversions: +(usAllConv * 0.15).toFixed(1), costPerAllConversions: 0 },
      ],
      devices: {
        mobile: { pct: 96.78, cost: +(usCost * 0.9678).toFixed(2), clicks: Math.round(usClicks * 0.9678) },
        desktop: { pct: 3.22, cost: +(usCost * 0.0322).toFixed(2), clicks: Math.round(usClicks * 0.0322) },
        tablet: { pct: 0, cost: 0, clicks: 0 },
      },
      daily: usDaily,
    },
    lat: {
      label: "ANP Health - LAT",
      kpis: {
        cost: { value: latCost, prev: latPrevCost },
        impressions: { value: latImpressions, prev: latPrevImpressions },
        clicks: { value: latClicks, prev: latPrevClicks },
        ctr: { value: latCTR, prev: latPrevCTR },
        cpc: { value: latCPC, prev: latPrevCPC },
        cpm: { value: latCPM, prev: latPrevCPM },
        conversions: { value: latConversions, prev: latPrevConversions },
        convValue: { value: latConvValue, prev: latPrevConvValue },
        convRate: { value: latConvRate, prev: latPrevConvRate },
        allConversions: { value: latAllConv, prev: latPrevAllConv },
        allConvValue: { value: latAllConvValue, prev: latPrevAllConvValue },
        roas: { value: latROAS, prev: latPrevROAS },
      },
      campaigns: [
        {
          name: "SEARCH CAPTACION MEX",
          cost: latCost,
          impressions: latImpressions,
          clicks: latClicks,
          ctr: latCTR,
          cpc: latCPC,
          conversions: latConversions,
          costPerConversion: latConversions > 0 ? +(latCost / latConversions).toFixed(2) : 0,
          allConversions: latAllConv,
          costPerAllConversions: latAllConv > 0 ? +(latCost / latAllConv).toFixed(2) : 0,
        },
      ],
      adGroups: [
        {
          name: "MX - Trabajar de Enfermero en EE.UU.",
          clicks: Math.round(latClicks * 0.5),
          cost: +(latCost * 0.5).toFixed(2),
          impressions: Math.round(latImpressions * 0.45),
          conversions: Math.round(latConversions * 0.5),
          topPositionPct: 45.0,
          costPerConversion: latConversions > 0 ? +(latCost * 0.5 / Math.max(1, Math.round(latConversions * 0.5))).toFixed(2) : 0,
        },
        {
          name: "MX - NCLEX Mexico Requisitos",
          clicks: Math.round(latClicks * 0.3),
          cost: +(latCost * 0.3).toFixed(2),
          impressions: Math.round(latImpressions * 0.3),
          conversions: Math.round(latConversions * 0.3),
          topPositionPct: 38.2,
          costPerConversion: latConversions > 0 ? +(latCost * 0.3 / Math.max(1, Math.round(latConversions * 0.3))).toFixed(2) : 0,
        },
        {
          name: "MX - Homologar Titulo desde Mexico",
          clicks: Math.round(latClicks * 0.2),
          cost: +(latCost * 0.2).toFixed(2),
          impressions: Math.round(latImpressions * 0.25),
          conversions: Math.round(latConversions * 0.2),
          topPositionPct: 32.5,
          costPerConversion: latConversions > 0 ? +(latCost * 0.2 / Math.max(1, Math.round(latConversions * 0.2))).toFixed(2) : 0,
        },
      ],
      keywords: [
        { keyword: "trabajo de enfermera en estados unidos", clicks: Math.round(latClicks * 0.25), cost: +(latCost * 0.25).toFixed(2), impressions: Math.round(latImpressions * 0.22), conversions: Math.round(latConversions * 0.3), topPositionPct: 50.0, costPerConversion: 0, cpc: +(latCPC * 0.95).toFixed(2), allConversions: +(latAllConv * 0.3).toFixed(1), costPerAllConversions: 0 },
        { keyword: "que es el nclex rn", clicks: Math.round(latClicks * 0.2), cost: +(latCost * 0.2).toFixed(2), impressions: Math.round(latImpressions * 0.2), conversions: Math.round(latConversions * 0.2), topPositionPct: 42.0, costPerConversion: 0, cpc: +(latCPC * 1.1).toFixed(2), allConversions: +(latAllConv * 0.2).toFixed(1), costPerAllConversions: 0 },
        { keyword: "sueldo enfermera estados unidos", clicks: Math.round(latClicks * 0.2), cost: +(latCost * 0.2).toFixed(2), impressions: Math.round(latImpressions * 0.22), conversions: Math.round(latConversions * 0.2), topPositionPct: 38.5, costPerConversion: 0, cpc: +(latCPC * 0.88).toFixed(2), allConversions: +(latAllConv * 0.2).toFixed(1), costPerAllConversions: 0 },
        { keyword: "convalidar carrera enfermeria", clicks: Math.round(latClicks * 0.2), cost: +(latCost * 0.2).toFixed(2), impressions: Math.round(latImpressions * 0.18), conversions: Math.round(latConversions * 0.15), topPositionPct: 35.0, costPerConversion: 0, cpc: +(latCPC * 1.05).toFixed(2), allConversions: +(latAllConv * 0.15).toFixed(1), costPerAllConversions: 0 },
        { keyword: "escuelas de enfermeria en estados unidos", clicks: Math.round(latClicks * 0.15), cost: +(latCost * 0.15).toFixed(2), impressions: Math.round(latImpressions * 0.18), conversions: Math.round(latConversions * 0.15), topPositionPct: 30.0, costPerConversion: 0, cpc: +(latCPC * 1.15).toFixed(2), allConversions: +(latAllConv * 0.15).toFixed(1), costPerAllConversions: 0 },
      ],
      devices: {
        mobile: { pct: 100, cost: latCost, clicks: latClicks },
        desktop: { pct: 0, cost: 0, clicks: 0 },
        tablet: { pct: 0, cost: 0, clicks: 0 },
      },
      daily: latDaily,
    },
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get("range") || "last30";
  const data = generateMockData(range);
  return NextResponse.json(data);
}
