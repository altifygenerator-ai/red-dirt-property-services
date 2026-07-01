# Red Dirt Property Services

Next.js site for Red Dirt Property Services.

## Local setup

```bash
npm install
npm run dev
```

## Quote form / Resend setup

The hero quote form posts to:

```txt
/api/quote
```

The route sends quote requests through Resend to:

```txt
reddirtpropertyservicesar@gmail.com
```

Use `.env.local.example` as the template. Create or edit `.env.local` with the real Resend key:

```env
RESEND_API_KEY=your_resend_key_here
QUOTE_TO_EMAIL=reddirtpropertyservicesar@gmail.com
QUOTE_FROM_EMAIL="Red Dirt Property Services <quotes@hometownwebservicesar.cc>"
QUOTE_REPLY_TO_EMAIL=reddirtpropertyservicesar@gmail.com
```

The sending domain/address is set to `hometownwebservicesar.cc`, so that domain or sender should be verified in Resend before the form is used live.

## Checks

```bash
npm run lint
npm run build
```
