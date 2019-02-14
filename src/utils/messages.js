import axios from 'axios'


export const sendBtnMsg = (recipientId, text, url, title) => {
  return axios({
    method: 'post',
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'button',
            text,
            buttons: [
              {
                type:'web_url',
                url,
                title,
                webview_height_ratio: 'full',
                messenger_extensions: true
              }
            ]
          }
        }
      }
    }
  })
}

export const sendTextMsg = (recipientId, text) => {
  return axios({
    method: 'post',
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: { text }
    }
  })
}

export const sendQuickReplies = (recipientId, title, quickReplyTexts) => {
  return axios({
    method: 'post',
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAIgFrVSjOcBAOHrZBvxGDdNdCrU17GW5UZC9gswziHskRS2nvF9xUam0wLXRNKPLMV0BuQdZAJjVYZCIEdoggEckhZAZAtuBo01YCQwaMDAZCYR6QjTGLieGpTcI6oi4JnHZA1QN9fk9OdTtfuINQgJvndFTZAfnydCYlCrdNMOKmwZDZD',
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: {
        text: title,
        quick_replies: quickReplyTexts.map(text => ({
          content_type: 'text',
          title: text,
          payload: text
        }))
      }
    }
  })
}
