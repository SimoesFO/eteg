#!/bin/bash

npm install
npx prisma migrate deploy
# tail -f /dev/null
npm run start:dev