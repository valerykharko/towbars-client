FROM node:16.14.2 as dependencies
WORKDIR /towbars-client
COPY package.json package-lock.json ./
RUN npm install

FROM node:16.14.2 as builder
WORKDIR /towbars-client
COPY . .
COPY --from=dependencies /towbars-client/node_modules ./node_modules
RUN npm run build

FROM node:16.14.2 as runner
WORKDIR /towbars-client
ENV NODE_ENV production

COPY --from=builder /towbars-client/public ./public
COPY --from=builder /towbars-client/package.json ./package.json
COPY --from=builder /towbars-client/.next ./.next
COPY --from=builder /towbars-client/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]