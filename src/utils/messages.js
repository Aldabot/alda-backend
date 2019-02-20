import axios from 'axios'

export const sendBtnMsg = (recipientId, text, url, title) => {
  return axios({
    method: 'post',
    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
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
  }).catch(error => console.error(error.response))
}

// Generic Template https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic
export const sendCards = (recipientId, cards) => {
  return axios({
    method: 'post',
    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: cards.map(card => ({
              title: card.title,
              image_url: card.imageUri,
              subtitle: card.subtitle,
              buttons: card.buttons.map(button => ({
                type: 'web_url',
                url: button.postback,
                title: button.text,
              }))
            }))
          }
        }
      }
    }
  }).catch(error => console.error(error.response))
}

export const sendTextMsg = (recipientId, text) => {
  return axios({
    method: 'post',
    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
    data: {
      messaging_type: 'RESPONSE',
      recipient: { id: recipientId },
      message: { text }
    }
  }).catch(error => console.error(error.response))
}

export const sendQuickReplies = (recipientId, title, quickReplyTexts) => {
  return axios({
    method: 'post',
    url: `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
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
  }).catch(error => console.error(error.response))
}
