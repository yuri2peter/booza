FROM node:lts-alpine3.18
ENV NODE_ENV=production
WORKDIR /dist
LABEL version="v1" description="empty-project"
# project="https://github.com/empty-project" maintainer="John@github"
COPY ./dist /dist
CMD ["node", "./server/main.js"]
