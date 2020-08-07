#!/bin/bash

set -eux -o pipefail

input="mail-720.png"

for size in 16 24 32 48 64 96 128 256 ; do
    convert "${input}" \
        -filter Cosine \
        -resize "${size}x${size}" \
        "mail-${size}.png"
done
