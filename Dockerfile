FROM lambci/lambda:build-nodejs8.10

COPY . .

RUN npm install -g serverless

CMD npm install && sls deploy

# docker build -t alda/backend-deploy .
# docker run --rm -e AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY mylambda
