const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: 'mQx5y9CR8ZVLeuYvIGJktagxxlwl-pJi9wBhaqfOqaG5',
  }),
  url: 'https://gateway.watsonplatform.net/assistant/api',
});

const message = async () => {

  try {

    let session_id = await assistant.createSession({ assistantId: 'aa9bcc34-cc42-4f98-aa69-7206af040660' })

    console.log('session >', session_id);

    let message = await assistant.message({
      assistantId: 'aa9bcc34-cc42-4f98-aa69-7206af040660',
      sessionId: session_id.result.session_id,
      input: {
        'message_type': 'text',
        'text': 'oi'
      }
    })

    console.log('message >', message.result.output);

    let result = message.result

    return result;

  } catch (error) {

    return error

  }

}

message();


