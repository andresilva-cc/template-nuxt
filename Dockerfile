FROM node:22
WORKDIR /app

RUN corepack enable

ENTRYPOINT [ ".docker/entrypoint.sh" ]