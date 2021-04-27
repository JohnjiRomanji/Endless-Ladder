function send() {
fetch(
  {process.env.WEBHOOK_URL},
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'Endless Ladder',
      // the avatar to be displayed
      avatar_url:
        'https://endless-ladder.netlify.app/img/favicon.png',
      // contents of the message to be sent
      content:
        '',
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      // embeds to be sent
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 11730954,
          // author
          // - icon next to text at top (text is a link)
          author: {
            name: 'The Endless Ladder Website',
            url: '',
            icon_url: 'https://endless-ladder.netlify.app/img/favicon.png',
          },
          // embed title
          // - link on 2nd row
          title: 'New Visit to The Endless Ladder Website!',
          url:
            'https://endless-ladder.netlify.app/',
          // thumbnail
          // - small image in top right corner.
          thumbnail: {
            url:
              'https://endless-ladder.netlify.app/img/favicon.png',
          },
          // embed description
          // - text on 3rd row
          description: 'There was a new visitor to The Endless Ladder Website',
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [],
          // image
          // - picture below description(and fields)
          // footer
          // - icon next to text at bottom
          footer: {
          },
        },
      ],
    }),
  }
);
}
