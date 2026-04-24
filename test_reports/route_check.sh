#!/bin/bash
BASE="https://origami-next-launch.preview.emergentagent.com"
ROUTES=(
  "/"
  "/about"
  "/games"
  "/ai"
  "/services"
  "/work"
  "/industries"
  "/insights"
  "/careers"
  "/contact"
  "/approach"
  "/sitemap.xml"
  "/robots.txt"
  "/ai/llm-apps"
  "/ai/rag"
  "/ai/agents"
  "/ai/voice"
  "/ai/vision"
  "/ai/evals"
  "/work/hiphopgrails"
  "/work/fanrush"
  "/work/acquire"
  "/work/videoshops"
  "/work/nickcooper"
  "/work/truewrld"
  "/work/wholosophy"
  "/services/mobile-app-development"
  "/services/ai-and-llm-products"
  "/services/auctions-and-fan-drops"
  "/services/class-ii-and-class-iii-games"
  "/services/web-development"
  "/services/design-and-brand"
  "/services/data-and-bi"
  "/services/dedicated-teams"
  "/industries/hip-hop-and-music"
  "/industries/real-money-gaming"
  "/industries/celebrity-and-creator-economy"
  "/industries/commerce-and-retail"
  "/industries/health-and-wellness"
  "/industries/fintech-and-payments"
)

PASS=0; FAIL=0; FAILED_LIST=""
for r in "${ROUTES[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$r")
  if [ "$code" = "200" ]; then
    PASS=$((PASS+1))
  else
    FAIL=$((FAIL+1))
    FAILED_LIST="$FAILED_LIST\n$r -> $code"
    echo "FAIL $code $r"
  fi
done
echo "---"
echo "PASS=$PASS FAIL=$FAIL"
echo -e "Failed:$FAILED_LIST"

# Also list insights slugs by parsing /insights page
echo "--- Fetching /insights for slug discovery"
curl -s "$BASE/insights" | grep -oE 'href="/insights/[a-z0-9-]+"' | sort -u
