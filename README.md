# Setup
- replace WebViewUrl in `./src/WebhookEvents/messagingMessage.js` and `./src/WebhookEvents/messagingPostbacks`
- add WebViewUrl to *Whitelisted Domains* of the Facebook Page: Settings->Messenger Platform->Whitelisted Domains (otherways the link-button just won't show up!)

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
To accomplish all in one use `yarn deploy`.

# Alda Dependencies
- *alda-graphql-server*
