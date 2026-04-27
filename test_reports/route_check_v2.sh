#!/bin/bash
BASE="https://origami-next-launch.preview.emergentagent.com"
ROUTES=(
  "/" "/about" "/services" "/work" "/careers" "/games" "/ai" "/contact" "/approach" "/industries" "/insights"
  "/build" "/solutions" "/compare"
  "/work/hiphopgrails" "/work/playsqor" "/work/acquire" "/work/videoshops" "/work/realprofits" "/work/getcashback" "/work/onlybeaches" "/work/nickcooper" "/work/truewrld" "/work/wholosophy"
  "/work/fanrush"
  "/build/react-native" "/build/ios-swift" "/build/android-kotlin" "/build/flutter" "/build/nextjs" "/build/react" "/build/nodejs" "/build/python-fastapi" "/build/postgres" "/build/openai-llm" "/build/anthropic-claude" "/build/google-gemini"
  "/compare/react-native-vs-flutter" "/compare/native-vs-react-native" "/compare/nextjs-vs-remix" "/compare/openai-vs-claude" "/compare/postgres-vs-mongodb" "/compare/ios-vs-android"
  "/industries/hip-hop-and-music" "/industries/real-money-gaming" "/industries/celebrity-and-creator-economy" "/industries/commerce-and-retail" "/industries/health-and-wellness" "/industries/fintech-and-payments" "/industries/travel-and-lifestyle"
  "/solutions/mobile-app-development-for-real-money-gaming" "/solutions/ai-and-llm-products-for-fintech-and-payments" "/solutions/web-development-for-travel-and-lifestyle" "/solutions/design-and-brand-for-celebrity-and-creator-economy" "/solutions/auctions-and-fan-drops-for-hip-hop-and-music"
  "/services/mobile-app-development" "/services/ai-and-llm-products" "/services/auctions-and-fan-drops" "/services/class-ii-and-class-iii-games" "/services/web-development" "/services/design-and-brand" "/services/data-and-bi" "/services/dedicated-teams"
  "/ai/llm-apps" "/ai/rag" "/ai/agents" "/ai/voice" "/ai/vision" "/ai/evals"
  "/insights/why-mobile-first-is-still-the-right-call-in-2026" "/insights/shipping-llm-features-without-shipping-a-demo" "/insights/class-ii-vs-class-iii-what-operators-actually-need" "/insights/auctions-are-a-design-problem-before-theyre-an-engineering-one"
  "/sitemap.xml" "/robots.txt"
)
PASS=0; FAIL=0; FAIL_LIST=""
for r in "${ROUTES[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$r")
  expected=200
  [[ "$r" == "/work/fanrush" ]] && expected=404
  if [[ "$code" == "$expected" ]]; then
    PASS=$((PASS+1))
  else
    FAIL=$((FAIL+1))
    FAIL_LIST="$FAIL_LIST\n$r -> $code (expected $expected)"
  fi
done
echo "PASS=$PASS FAIL=$FAIL TOTAL=${#ROUTES[@]}"
echo -e "Failures:$FAIL_LIST"
