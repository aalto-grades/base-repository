# SPDX-FileCopyrightText: 2022 The Aalto Grades Developers
#
# SPDX-License-Identifier: MIT

FROM node:16-alpine

WORKDIR /app

COPY . .

RUN chown -R node:node ./*

RUN npm ci

RUN npm run build

USER node

CMD ["/bin/sh", "-c", "npm run migration:up && npm run seed:up && npm run start"]

EXPOSE 3000
