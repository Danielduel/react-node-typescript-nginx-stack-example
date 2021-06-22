# docker image rm temp/types:local
# docker image rm temp/backend:local
# docker image rm temp/frontend:local

docker build -f ./types/Dockerfile ./types -t temp/types:local
docker build -f ./backend/Dockerfile.production ./backend -t temp/backend:local
docker build -f ./frontend/Dockerfile.production ./frontend -t temp/frontend:local

kubectl apply -f ./deployment.yaml --record
