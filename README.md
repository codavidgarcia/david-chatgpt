# ChatGPT-Vercel
! [](assets/preview-light.png#gh-light-mode-only)
! [](assets/preview-dark.png#gh-dark-mode-only)

> This project is developed based on [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo).

## Usage

- Setting

  - System role command: will be added every time you ask a question, be sure to use a plus period. It is mainly used to customize the tone of ChatGPT, verbal phrases and so on.

  - Thought Divergence: The higher the ChatGPT's thought process, the more divergent it becomes and the more it starts to answer randomly. You can adjust this option for different questions, and turn it up for creative ones.

  - Open Continuous Conversation: OpenAI does not provide the contextual feature like ChatGPT, but can only pass the whole conversation every time, and it has to count the token, and there is still a limit of 4096 tokens.

- How token is counted: OpenAI has its own algorithm, most of the time it is 1 token for a word and 2 tokens for a Chinese character.
- How to get the Open AI Key: Sign up for an OpenAI account and then [Generate Key](https://platform.openai.com/account/api-keys) and you're done. Register now and get $5, you can use it for a month or two. 闲注册麻烦，可以直接去买号，自行搜索。 注意不要被骗，一般 5 元以下可以入手，看到有 120 美元的 key，这种属于是绑了虚拟信用卡，可以透支 120 美元，只能用一个月，而且容易封号。
- 输入框右边的四个按钮：
  - 对话生成图片，电脑上复制，手机上下载。
  - 对话生成 Markdown，复制到剪贴板。
  - 重新回答最近的一个问题。 其实也可以用键盘的<kbd>↑</kbd>键，可以自动将最近的一次提问填到输入框里。
  - 清空对话。
- 输入框
  - <kbd>Enter</kbd>发送，<kbd>Shift</kbd>+<kbd>Enter</kbd>换行。
  - <kbd>空格</kbd> 或者 <kbd>/</kbd> 搜索 Prompt 预设，现在只显示 20 个。 所有 Prompt 可以查看 [prompts.md](prompts.md) 。
  - <kbd>↑</kbd> 将最近的一次提问填到输入框里。
- 点击顶部标题滚动到顶部，点击输入框滚动到底部。
- 发送 sk- 开头的 key，可以直接查询余额。 可以换行查询多个。 也可以发送 `查询填写的 Key 的余额` 来直接查询你填的 key 的余额，这个 Prompt 预设第一个就是，直接用。 作为站长，你可以通过设置环境变量来定时查询所有内置 key 的余额，并发送到微信上。



## 部署一个你自己的 ChatGPT 网站（免费）
[! [](assets/powered-by-vercel.svg)](http://vercel.com/?utm_source=busiyi&utm_campaign=oss)

如果你只需要部署一个你自己用的网站，而不需要定制，那么你完全不需要在本地跑起来，你可以直接点击下面的按钮，然后按照提示操作，然后在 Vercel 中填入环境变量即可。vercel.app 域名已经被墙，但 vercel 本身没有被墙，所以你绑定自己的域名就可以了。 如果广泛分享，域名有被墙的风险。

[! [Deploy with Vercel](https://vercel.com/button?utm_source=busiyi&utm_campaign=oss)](https://vercel.com/new/clone?utm_source=busiyi& utm_campaign=oss&repository-url=https://github.com/ourongxing/chatgpt-vercel&env=OPENAI_API_KEY)

But this way is not easy to update, it is better to fork this repository first, then import your own repository in [Vercel](https://vercel.com/new?utm_source=busiyi&utm_campaign=oss), and then click `Sync fork` in Github to synchronize the updates.

If you need to deploy to more people and need to change some code, then you may need to `git clone` the repository you created above to your local repository. You can redeploy it with a few clicks on vscode after changing `git commit & push`. You can also use vercel's cli, `vercel deploy --prod`.

If you need to develop and debug locally, it's a bit tricky to:

1. upgrade to `node18`, use native `fetch` and `readableStream`. 2.
2. the API is walled, find your own way to open a proxy, otherwise it will report an error. You can set the OpenAI proxy API, or you can directly deploy `vercel deploy` to vercel development environment to debug.
3. `pnpm i` Install the dependencies. 4.
4. `pnpm dev` Start the project.

#### More deployment options

The project currently supports, in addition to Vercel

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)

It is possible to import directly, but it is not recommended to use deployment solutions other than Vercel. In addition to being slower, more importantly, only Vercel supports setting the region of the Edge Function server. Other platforms will automatically use the closest server, which may be a region not supported by OpenAI, resulting in a block.

#### Environment Variables

| Environment Variables | Description | Default                                                                                                                         |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OPENAI_API_KEY` | OpenAI API Key，You can fill in more than one, separated by \| or line break, and call them randomly. It is better to fill in more than one, the API has a concurrency limit. If the user does not fill in his own key, then your key。 | None |
| `DEFAULT_MESSAGE` | Default prompt message | - xx xx |
| `DEFAULT_SETTING` | Default Settings | {<br/> "continuousDialogue": true,<br/> "archiveSession": false,<br/> "openaiAPIKey": "",<br /> " openaiAPITemperature": 60,<br/> "systemRule": ""<br/> "password": ""<br />} |
| `RESET_CONTINUOUS_DIALOGUE_OPTION` | Reset on refresh `Enable continuous dialog` option, which is effective in avoiding heavy consumption when sharing for many people to use.                                                                                                                                     | false |
| `OPENAI_API_BASE_URL` | You can fill in the OpenAI proxy server when developing locally, but Vercel doesn't need it.                                                                                                                                                     | api.openai.com |
| `PASSWORD` | Website password | None |
| `MAX_INPUT_TOKENS` | The maximum value of the input token, if `continuous conversations` are enabled, all previous conversations will be counted. If you don't want to be abused, you can set this value even smaller. | 3072 |
| `SENDKEY` | Use [Server Sauce](https://sct.ftqq.com/sendkey) to push the account balance and availability status to WeChat, if you need to get it yourself. The push time is 8am and 8pm, modified in the vercel.json file. If there are too many keys, more than 20, it may fail.                   | None
| `SENDCHANNEL` | Push channel for [Server sauce](https://sct.ftqq.com/sendkey), default WeChat service number.                                                                                                                                           | 9 |

There are two ways to set it

1. Modify the `.env.example` file to `.env` and set it in `.env`.
2. set `Environment Variables` in Vercel. Try to use this method, it is more convenient. It will take effect on the next deployment.
   ! [](assets/environment.png)

#### default setting

> Remember to remove the comments, or just copy them from the table above.

```json5
{
  continuousDialogue: true, // open continuous dialogue, each time you need to pass the context to the API, more costly, and also has a 4096 token limit
  archiveSession: false, // record the content of the conversation, will not empty the conversation after refreshing
  openaiAPIKey: "", // default key, don't need to fill it in, otherwise others can see it.
  password: "", // default password, don't need to fill it in, otherwise other people can see it.
  openaiAPITemperature: 60, // 0-100 The higher ChatGPT thinks, the more scattered it is, and starts to answer randomly.
  systemRule: "" // System role command, will be added each time a question is asked. This is mainly used to customize ChatGPT's tone of voice and mantra.
}

## Submit your Prompts

1. Fork this project. 2.
2. Modify `prompts.md`. 3.
3. Pull Request and you're done.

If you don't know how to do this, you can also submit your Prompts directly in Issues. most Prompts currently come from [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh ), but of course, most of this repository is also a translation of [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts), so thanks for that.

#### Requirements

- Putting what needs to be typed at the end can indicate that ChatGPT has started typing, e.g. "My first sentence is:".
- Go ahead and optimize the existing Prompts as much as possible, rather than adding them repeatedly.
- Add to the end and I will organize it regularly.

## Appreciation

If this project has helped you, you can buy some snacks for the kitten, but no paid feature requests will be accepted.

![](./assets/reward.gif)

## License
[MIT](./LICENSE)

## Submit your Prompts

1. Fork this project. 2.
2. Modify `prompts.md`. 3.
3. Pull Request and you're done.

If you don't know how to do this, you can also submit your Prompts directly in Issues. most Prompts currently come from [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh ), but of course, most of this repository is also a translation of [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts), so thanks for that.

#### Requirements

- Putting what needs to be typed at the end can indicate that ChatGPT has started typing, e.g. "My first sentence is:".
- Go ahead and optimize the existing Prompts as much as possible, rather than adding them repeatedly.
- Add to the end and I will organize it regularly.

## Appreciation

If this project has helped you, you can buy some snacks for the kitten, but no paid feature requests will be accepted.

! [](. /assets/reward.gif)

## License
[MIT](. /LICENSE)

Translated with www.DeepL.com/Translator (free version)
