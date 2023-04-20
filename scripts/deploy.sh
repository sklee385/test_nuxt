#!/bin/bash  
cd ..
git clean -fd
npm install 
npm run build 
pm2 reload all 
