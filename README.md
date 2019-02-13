# Setup
- replace WebViewUrl in `./src/WebhookEvents/messagingMessage.js` and `./src/WebhookEvents/messagingPostbacks`
- add WebViewUrl to *Whitelisted Domains* of the Facebook Page: Settings->Messenger Platform->Whitelisted Domains (otherways the link-button just won't show up!)
- add *SALTEDGE_APP_ID* and *SALTEDGE_APP_SECRET* to `.env` file. **IMPORTANT** the key needs to be a *Service key* (not an *App* key).

# Run
- start mysql-prisma docker: go to `cd alda-graphql-server/docker & docker-composer up`
- start alda-backend: run `sls offline` in this repository
- start webview: go to `cd alda-frontend & yarn start`
- make services reachable from outside with ngrok: `ngrok http 4000` (alda-backend) and `ngrok http 3000` alda-frontend
- go to facebook developers and add ngrok->4000/fbWebhook as webhook
- go to facebook page and add webview ngrok->3000 to *whitelisted domains*

# Update
To update the *alda-* repositories without publishing them before you can use the relative path of the local repository e.g. `yarn add ../alda-graphql-server'`

# Deploy
We need to compile the javascript code for *Node 8.10*, which is the current limitation of *AWS Lambda.* Therefore we run a docker image ( simulating a lambda environment ) build the code within the image and deploy it then via serverless.
- Make sure that *AWS_ACCESS_KEY_ID* and *AWS_SECRET_ACCESS_KEY* listed in the `.env` file (they are needed in the docker environment which executes `sls deploy`).
- Build the docker image with `yarn build`
- Deploy the Lambdas with `yarn deploy`
If the `.env` contains the aws credentials and the docker image is already build you can skip and directly deploy the lambdas with `yarn deploy`.

# Alda Dependencies
- *alda-graphql-server*
