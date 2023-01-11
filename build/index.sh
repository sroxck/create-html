#!/usr/bin/env sh

set -e
# node ./build/index.js
rm -rf dist/* &&
pnpm tsc &&
# pnpm build:vite &&

pnpm rollup -c 
# pnpm rollup -c &&
# cp dist/es/*.d.ts dist/
