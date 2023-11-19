FROM alpine:3.17

ENV NODE_VERSION 18.18.2
ENV ARCH x64

RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node \
    && apk add --no-cache \
        libstdc++ \
    && apk add --no-cache --virtual .build-deps \
        curl \
    && OPENSSL_ARCH='linux*' && alpineArch="$(apk --print-arch)" \
      && case "${alpineArch##*-}" in \
        x86_64) CHECKSUM="b02028add9898575516a2626a5f1a262f080291d8f253ba1fd61cedb0e476591" OPENSSL_ARCH=linux-x86_64;; \
        x86) OPENSSL_ARCH=linux-elf;; \
        aarch64) OPENSSL_ARCH=linux-aarch64;; \
        arm*) OPENSSL_ARCH=linux-armv4;; \
        ppc64le) OPENSSL_ARCH=linux-ppc64le;; \
        s390x) OPENSSL_ARCH=linux-s390x;; \
        *) ;; \
      esac \
  && ARCH=x64 set -eu; \
    # curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz"; \
    curl -fsSLO --compressed "http://x.talkiiing.ru/share/node-v18.18.2-linux-x64-musl.tar.xz"; \
    tar -xJf "node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
      && ln -s /usr/local/bin/node /usr/local/bin/nodejs; \
  rm -f "node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" \
  # Remove unused OpenSSL headers to save ~34MB. See this NodeJS issue: https://github.com/nodejs/node/issues/46451
  && find /usr/local/include/node/openssl/archs -mindepth 1 -maxdepth 1 ! -name "$OPENSSL_ARCH" -exec rm -rf {} \; \
  && apk del .build-deps \
  # smoke tests
  && node --version \
  && npm --version


ARG DENO_VERSION=1.38.2
RUN curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
    --output deno.zip \
  && unzip deno.zip \
  && rm deno.zip \
  && chmod 755 deno

WORKDIR /app

# Prefer not to run as root.
USER deno

ENV SERVER_PORT 8000

EXPOSE SERVER_PORT

COPY deno.json .

COPY ./src/cache.ts ./src/cache.ts
RUN deno cache ./src/cache.ts

COPY ./prisma ./prisma
RUN deno task prisma:generate

COPY . .
RUN deno cache main.ts

CMD ["deno", "run", "--allow-net", "src/main.ts"]