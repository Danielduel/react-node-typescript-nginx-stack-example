echo ================ Create registry ================
docker service create --name registry --publish published=5000,target=5000 registry:2
echo ================ Compose build ================
docker-compose -f docker-stack.yml build
echo ================ Stack deploy ================
docker stack deploy -c docker-stack.yml demo
