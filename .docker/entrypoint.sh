#!/usr/bin/env bash

# Ref: https://github.com/nitrojs/nitro/issues/885
rm -rf /tmp/nitro/worker-*

pnpm install
pnpm dev
