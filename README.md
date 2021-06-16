This repository contains barebones example application with following stack:
- React on front
- Compiled Typescript on Node14 as backend
- Shared types as subimage
- Front app is served by deep nginx
- Whole stack is reverse-proxied by shallow nginx

Whole app is dockerized and I expect it to be runnable by simple `docker-compose up --build`. Note that most likely
my overrides to the NGINXes are security nightmare, because I haven't put more thought into this over simple
"please run".

`deploy.sh` deploys app stack locally.

